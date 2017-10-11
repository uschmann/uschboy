module.exports = {
  name: 'rr h',
  opcode: 'cb1c',
  cycles: 8,
  execute(cpu) {
    var reg = 'h';
    var wasCarry = cpu.isCarry();

    ((cpu.regs[reg] & 1) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs[reg] = ((cpu.regs[reg] >> 1) | (wasCarry ? 0x80 : 0)) & 0xFF;
    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'rr h';
  }
};
