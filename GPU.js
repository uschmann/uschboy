
const MODE_OAM = 0;         // GPU is accessing the OAM
const MODE_VRAM = 1;        // GPU is accessing the VRAM
const MODE_H_BLANK = 2;     // GPU is in H-Blank
const MODE_V_BLANK = 3;     // GPU is in V-Blank

const DURATION_OAM = 80;
const DURATION_VRAM = 172;
const DURATION_H_BLANK = 204;
const DURATION_V_BLANK = 4560;

const NUMBER_OF_LINES_IN_V_BLANK = 10;

class GPU {

  constructor(context) {
    this.context = context;
    this.reset();
  }

  reset() {
    this.clock = 0;
    this.mode = MODE_OAM;
    this.line = 0;
    this.scrollX = 0;
    this.scrollY = 0;
    this.backgroundPal = 0;
    // control register
    this.switchBg = 0;
    this.bgMap = 0;
    this.bgTile = 0;
    this.switchLcd = 0;
    this.img = 0;
    // init bgPal
    this.bgPal = [
      [0, 0, 0, 255],
      [0, 0, 0, 255],
      [0, 0, 0, 255],
      [0, 0, 0, 255]
    ];

    this.vram = new Array(0x2000);
    for(var i = 0; i < 0x2000; i++) {
      this.vram[i] = 0;
    }

    // init tileset
    this.tileset = [];
    for(var i = 0; i < 384; i ++) {
      this.tileset[i] = [];
      for(var j = 0; j < 8; j++)
      {
        this.tileset[i][j] = [0,0,0,0,0,0,0,0];
      }
    }

    // framebuffer
    this.scrn = this.context.createImageData(160, 144);
    for(var i=0; i<160*144*4; i++) {
        this.scrn.data[i] = 255;
    }

  }

  step(cycles) {
    this.clock += cycles;

    switch(this.mode) {
      case MODE_OAM:
        if(this.clock >= DURATION_OAM) {
          this.mode = MODE_VRAM;
          this.clock = 0;
        }
        break;

      case MODE_VRAM:
        if(this.clock >= DURATION_VRAM) {
          this.mode = MODE_H_BLANK;
          this.clock = 0;

          // Render one line here
          if(this.switchLcd === 1) {
            this.renderScanline()
          }
        }
        break;

      case MODE_H_BLANK:
        if(this.clock >= DURATION_H_BLANK) {
          this.clock = 0;
          this.line ++;

          if(this.line == 143) {
            this.mode = MODE_V_BLANK;
            // A full frame is rendered here
            if(this.switchLcd) {
              this.context.putImageData(this.scrn, 0, 0);
            }

          }
          else {
            this.mode = MODE_OAM;
          }
        }
        break;

      case MODE_V_BLANK:
        if(this.clock >= DURATION_V_BLANK / NUMBER_OF_LINES_IN_V_BLANK) {
          this.clock = 0;
          this.line ++;

          if(this.line > 153) {
            this.mode = MODE_OAM;
            this.line = 0;
          }
        }
        break;
    }
  }

  renderScanline() {
    // VRAM offset for the tile map
	var mapoffs = this.bgMap ? 0x1C00 : 0x1800;

	// Which line of tiles to use in the map
	mapoffs += (((this.line + this.scrollY) & 255) >> 3) << 5;

	// Which tile to start with in the map line
	var lineoffs = (this.scrollX >> 3) & 31;

	// Which line of pixels to use in the tiles
	var y = (this.line + this.scrollY) & 7;

	// Where in the tileline to start
	var x = this.scrollX & 7;

  // Where to render on the canvas
	var canvasoffs = this.line * 160 * 4;

	// Read tile index from the background map
	var colour;
	var tile = this.vram[mapoffs + lineoffs];

  // If the tile data set in use is #1, the
	// indices are signed; calculate a real tile offset
  if(this.bgTile == 1 && tile < 128) {
     //tile += 256;
  }
  	for(var i = 0; i < 160; i++)
  	{
  	    // Re-map the tile pixel through the palette
  	    colour = this.bgPal[this.tileset[tile][y][x]];
  	    // Plot the pixel to canvas
  	    this.scrn.data[canvasoffs+0] = colour[0];
  	    this.scrn.data[canvasoffs+1] = colour[1];
  	    this.scrn.data[canvasoffs+2] = colour[2];
  	    this.scrn.data[canvasoffs+3] = colour[3];
  	    canvasoffs += 4;
  	    // When this tile ends, read another
  	    x++;
  	    if(x == 8)
  	    {
      		x = 0;
      		lineoffs = (lineoffs + 1) & 31;
      		tile = this.vram[mapoffs + lineoffs];
      		//if(this.bgTile == 1 && tile < 128) tile += 256;
  	    }
  	}
  }

  setBackgroundPal(val) {
    this.backgroundPal = val;
    for(var i = 0; i < 4; i++)
		{
      switch((val >> (i * 2)) & 3)
      {
        case 0: this.bgPal[i] = [255,255,255,255]; break;
        case 1: this.bgPal[i] = [192,192,192,255]; break;
        case 2: this.bgPal[i] = [ 96, 96, 96,255]; break;
        case 3: this.bgPal[i] = [  0,  0,  0,255]; break;
      }
		}
  }

  readBackgroundPal() {
    return this.backgroundPal;
  }

  setControl(val) {
    this.switchBg  = (val & 0x01) ? 1 : 0;
		this.bgMap     = (val & 0x08) ? 1 : 0;
		this.bgTile    = (val & 0x10) ? 1 : 0;
		this.switchLcd = (val & 0x80) ? 1 : 0;
  }

  getControl() {
    return (this.switchBg   ? 0x01 : 0x00) |
           (this.bgMap      ? 0x08 : 0x00) |
           (this.bgTile     ? 0x10 : 0x00) |
           (this.switchLcd  ? 0x80 : 0x00);
  }

  updateTile(addr, val) {
    addr &= 0x1FFE;

  	// Work out which tile and row was updated
  	var tile = (addr >> 4) & 511;
  	var y = (addr >> 1) & 7;

  	for(var x = 0; x < 8; x++)
  	{
	    // Find bit index for this pixel
	    var sx = 1 << (7-x);

	    // Update tile set
	    this.tileset[tile][y][x] =
	        ((this.vram[addr] & sx)   ? 1 : 0) +
	        ((this.vram[addr+1] & sx) ? 2 : 0);
  	}
  }

}

module.exports = GPU;
