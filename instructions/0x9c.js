module.exports = {
  name: 'sbc a, h',
  opcode: '9c',
  cycles: 4,
  execute(cpu) {
    const value = cpu.regs.h + (cpu.isCarry() ? 1 : 0);
    const result = (cpu.regs.a - value);

    result == 0 ? cpu.setZero() : cpu.resetZero();
    ((cpu.regs.a & 0x0F) - (cpu.regs.h & 0x0F) - (cpu.isCarry() ? 1 : 0)) < 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    result < 0 ? cpu.setCarry() : cpu.resetCarry();
    cpu.setSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `sbc a, h`;
  }
};
