module.exports = {
  name: 'rl h',
  opcode: 'cb14',
  cycles: 8,
  execute(cpu) {
    var reg = 'h';
    var wasCarry = cpu.isCarry();
    ((cpu.regs[reg] & (1 << 7)) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs[reg] = ((cpu.regs[reg] << 1) + (wasCarry ? 1 : 0)) & 0xFF;
    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'rl h';
  }
};
