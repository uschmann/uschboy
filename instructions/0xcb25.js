module.exports = {
  name: 'sla l',
  opcode: 'cb25',
  cycles: 8,
  execute(cpu) {
    var reg = 'l';

    ((cpu.regs[reg] & (1 << 7)) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs[reg] = (cpu.regs[reg] << 1) & 0xFF;
    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'sla l';
  }
};
