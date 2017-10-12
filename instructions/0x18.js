const MathHelper = require('../helper/MathHelper');

module.exports = {
  name: 'jr n',
  opcode: '18',
  cycles: 8,
  execute(cpu) {
    var n = MathHelper.toSignedValue(cpu.memory.readByte(cpu.regs.pc + 1));
    cpu.regs.pc = (cpu.regs.pc + 2 + n) & 0xFFFF;

    return 9;
  },
  disasm(cpu) {
    return 'jr n'
  }
};
