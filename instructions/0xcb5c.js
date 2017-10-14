module.exports = {
  name: 'bit 3, h',
  opcode: 'cb5c',
  cycles: 8,
  execute(cpu) {
    (cpu.regs.h & (1 << 3)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'bit 3, h';
  }
};
