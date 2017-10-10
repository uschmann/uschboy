module.exports = {
  name: 'ccf',
  opcode: '3f',
  cycles: 4,
  execute(cpu) {
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.isCarry() ? cpu.resetCarry() : cpu.setCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `ccf`;
  }
};
