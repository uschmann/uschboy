module.exports = {
  name: 'inc e',
  opcode: '1c',
  cycles: 4,
  execute(cpu) {
    const reg = 'e';
    cpu.regs[reg] = (cpu.regs[reg] + 1) & 0xFF;

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    (cpu.regs[reg] & 0x0F) == 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `inc e`;
  }
};
