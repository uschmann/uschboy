module.exports = {
  name: 'swap b',
  opcode: 'cb30',
  cycles: 8,
  execute(cpu) {
    var reg = 'b';
    cpu.regs[reg] = (cpu.regs[reg] >> 4) | ((cpu.regs[reg] << 4) & 0xF0);

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'swap b';
  }
};
