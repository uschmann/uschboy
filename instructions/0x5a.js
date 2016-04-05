module.exports = {
  name: 'ld e, d',
  opcode: '5a',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, d';
  }
};
