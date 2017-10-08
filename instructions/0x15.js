module.exports = {
  name: 'dec d',
  opcode: '15',
  cycles: 4,
  execute(cpu) {
    const reg = 'd';
    cpu.regs[reg] = (cpu.regs[reg] - 1) & 0xFF;

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    (cpu.regs[reg] & 0x0F) == 0x0F ? cpu.setHalfCarry() : cpu.resetHalfCarry();

    cpu.setSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `dec d`;
  }
};
