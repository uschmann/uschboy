module.exports = {
  name: 'swap l',
  opcode: 'cb35',
  cycles: 8,
  execute(cpu) {
    var reg = 'l';
    cpu.regs[reg] = (cpu.regs[reg] >> 4) | ((cpu.regs[reg] << 4) & 0xF0);

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'swap l';
  }
};
