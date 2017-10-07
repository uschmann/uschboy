module.exports = {
  name: 'xor a',
  opcode: 'af',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.a ^ cpu.regs.a;

    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `xor a`;
  }
};
