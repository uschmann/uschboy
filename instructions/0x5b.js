module.exports = {
  name: 'ld e, e',
  opcode: '5b',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, e';
  }
};
