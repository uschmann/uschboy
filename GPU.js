
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

  constructor() {
    this.reset();
  }

  reset() {
    this.clock = 0;
    this.mode = MODE_OAM;
    this.line = 0;
    this.scrollX = 0;
    this.scrollY = 0;
    this.control = 0;
    this.backgroundPal = 0;
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
          //console.log('GPU.line = ' + this.line);
        }
        break;

      case MODE_H_BLANK:
        if(this.clock >= DURATION_H_BLANK) {
          this.clock = 0;
          this.line ++;

          if(this.line == 143) {
            this.mode = MODE_V_BLANK;
            // A full frame is rendered here
            //console.log('V_BLANK');
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

  setBackgroundPal(val) {
    this.backgroundPal = val;
  }

  setControl(val) {
    this.control = val;
    console.log('Controle: ' + val.toString(16));
  }

}

module.exports = GPU;
