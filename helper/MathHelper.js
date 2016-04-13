'use strict';

const helper = {};

/**
 * Converts the given value to
 * the corresponding signed value.
 * @param value {number} An 8 bit unsigned number
 */
helper.toSignedValue = (value) => {
  if(value & 0x80) {
    return value - 0x100;
  }
  return value;
}

/**
 * Converts the given value to
 * the corresponding unsigned value.
 * @param value {number} An 8 bit signed number
 */
helper.toUnsignedVale = (value) => {
  if(value < 0) {
    return value + 0x100;
  }
  return value;
}

module.exports = helper;
