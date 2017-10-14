const registers = {};

registers.LCD_CONTROL = 0xFF40;
registers.LCD_STATUS = 0xFF41;
registers.LCD_SCROLL_Y = 0xFF42;
registers.LCD_SCROLL_X = 0xFF43;
registers.LCD_LINE_Y = 0xFF44;
registers.LCD_BACKGROUND_PAL = 0xFF47;

module.exports = registers;
