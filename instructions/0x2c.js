module.exports = {
  name: 'inc l',
  opcode: '2c',
  cycles: 4,
  execute(cpu) {
    const reg = 'l';
    cpu.regs[reg] = (cpu.regs[reg] + 1) & 0xFF;

    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();
    (cpu.regs[reg] & 0x0F) == 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `inc l`;
  }
};
