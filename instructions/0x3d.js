module.exports = {
  name: 'dec a',
  opcode: '3d',
  cycles: 4,
  execute(cpu) {
    const reg = 'a';
    cpu.regs[reg] = (cpu.regs[reg] - 1) & 0xFF;

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    (cpu.regs[reg] & 0x0F) == 0x0F ? cpu.setHalfCarry() : cpu.resetHalfCarry();

    cpu.setSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `dec a`;
  }
};
