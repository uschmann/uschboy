module.exports = {
  name: 'ld e, a',
  opcode: '5f',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, a';
  }
};
