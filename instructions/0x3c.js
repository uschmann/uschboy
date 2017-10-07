module.exports = {
  name: 'inc a',
  opcode: '3c',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = (cpu.regs.a + 1) & 0xFF;

    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();
    (cpu.regs.a & 0x0F) == 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `inc a`;
  }
};
