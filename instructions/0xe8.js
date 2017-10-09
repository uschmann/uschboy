const MathHelper = require('../helper/MathHelper');

module.exports = {
  name: 'add sp, n',
  opcode: 'e8',
  cycles: 16,
  execute(cpu) {
    var n = MathHelper.toSignedValue(cpu.memory.readByte(cpu.regs.pc + 1));
    var tmp = cpu.regs.sp ^ n ^ ((cpu.regs.sp + n) & 0xFFFF);
    cpu.regs.sp  = (cpu.regs.sp + n) & 0xFFFF;

    cpu.resetZero();
    cpu.resetSubtract();
    (tmp & 0x100) == 0x100 ? cpu.setCarry() : cpu.resetCarry();
    (tmp & 0x010) == 0x010 ? cpu.setHalfCarry() : cpu.resetHalfCarry();

    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    return `add sp, ${n.toString(16)}`;
  }
};
