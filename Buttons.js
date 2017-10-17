'use strict';

class Buttons {

  constructor(document) {
    this.p14 = false; // right, left, up, down
    this.p15 = false; // a, b, select, start

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.a = false;
    this.b = false;
    this.start = false;
    this.select = false;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(event) {
    switch(event.key) {
      case 'ArrowUp':
        this.up = true;
        break;
      case 'ArrowDown':
        this.down = true;
        break;
      case 'ArrowLeft':
        this.left = true;
        break;
      case 'ArrowRight':
        this.right = true;
        break;
      case 'Enter':
        this.start = true;
        break;
      case 'Backspace':
        this.select = true;
        break;
      case 's':
        this.a = true;
        break;
      case 'a':
        this.b = true;
        break;
    }
  }

  onKeyUp(event) {
    switch(event.key) {
      case 'ArrowUp':
        this.up = false;
        break;
      case 'ArrowDown':
        this.down = false;
        break;
      case 'ArrowLeft':
        this.left = false;
        break;
      case 'ArrowRight':
        this.right = false;
        break;
      case 'Enter':
        this.start = false;
        break;
      case 'Backspace':
        this.select = false;
        break;
      case 's':
        this.a = false;
        break;
      case 'a':
        this.b = false;
        break;
    }
  }

  writeP1(value) {
    this.p14 = (value & 0x20) > 0;
    this.p15 = (value & 0x10) > 0;
  }

  readP1() {
    var keys = 0x0F;
    keys |= this.p14 ? 0x20 : 0x00;
    keys |= this.p15 ? 0x10 : 0x00;
    if(this.p14) {
      keys ^= this.right ? 0x01 : 0x00;
      keys ^= this.left ? 0x02 : 0x00;
      keys ^= this.up ? 0x04 : 0x00;
      keys ^= this.down ? 0x08 : 0x00;
    }
    if(this.p15) {
      keys ^= this.a ? 0x01 : 0x00;
      keys ^= this.b ? 0x02 : 0x00;
      keys ^= this.select ? 0x04 : 0x00;
      keys ^= this.start ? 0x08 : 0x00;
    }
    return keys;
  }

}

module.exports = Buttons;
