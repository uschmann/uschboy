module.exports = {
  name: 'swap a',
  opcode: 'cb37',
  cycles: 8,
  execute(cpu) {
    var reg = 'a';
    cpu.regs[reg] = (cpu.regs[reg] >> 4) | ((cpu.regs[reg] << 4) & 0xF0);

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'swap a';
  }
};
