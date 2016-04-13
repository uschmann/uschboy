const MathHelper = require('../helper/MathHelper');

module.exports = {
  name: 'ld hl, sp + n',
  opcode: 'f8',
  cycles: 12,
  execute(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    var result = (cpu.regs.sp + MathHelper.toSignedValue(n)) & 0xFFFF;
    if((result & 0xFF) < n) {
      cpu.setCarry();
    }
    cpu.regs.h = result >> 8;
    cpu.regs.l = result & 0xFF;
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    return `ld hl , sp + ${n.toString(16)}`
  }
};
