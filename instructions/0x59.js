module.exports = {
  name: 'ld e, c',
  opcode: '59',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, c';
  }
};
