module.exports = {
  name: 'sub a, a',
  opcode: '97',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = 0;
    cpu.setZero();
    cpu.setSubtract();
    cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `sub a, a`;
  }
};
