module.exports = {
  name: 'sla d',
  opcode: 'cb22',
  cycles: 8,
  execute(cpu) {
    var reg = 'd';

    ((cpu.regs[reg] & (1 << 7)) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs[reg] = (cpu.regs[reg] << 1) & 0xFF;
    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'sla d';
  }
};
