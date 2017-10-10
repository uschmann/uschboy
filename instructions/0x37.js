module.exports = {
  name: 'scf',
  opcode: '3f',
  cycles: 4,
  execute(cpu) {
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.setCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `scf`;
  }
};
