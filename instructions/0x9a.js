module.exports = {
  name: 'sbc a, d',
  opcode: '9a',
  cycles: 4,
  execute(cpu) {
    const value = cpu.regs.d + (cpu.isCarry() ? 1 : 0);
    const result = (cpu.regs.a - value);

    result == 0 ? cpu.setZero() : cpu.resetZero();
    ((cpu.regs.a & 0x0F) - (cpu.regs.d & 0x0F) - (cpu.isCarry() ? 1 : 0)) < 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    result < 0 ? cpu.setCarry() : cpu.resetCarry();
    cpu.setSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `sbc a, d`;
  }
};
