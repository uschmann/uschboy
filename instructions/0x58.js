module.exports = {
  name: 'ld e, b',
  opcode: '58',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, b';
  }
};
