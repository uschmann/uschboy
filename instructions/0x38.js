const MathHelper = require('../helper/MathHelper');

module.exports = {
  name: 'jr c, n',
  opcode: '38',
  cycles: 8,
  execute(cpu) {
    if(cpu.isCarry()) {
      var n = MathHelper.toSignedValue(cpu.memory.readByte(cpu.regs.pc + 1));
      cpu.regs.pc = (cpu.regs.pc + 2 + n) & 0xFFFF;
    }
    else {
      cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    }
    return 8;
  },
  disasm(cpu) {
    return 'jr c, n'
  }
};
