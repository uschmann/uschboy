module.exports = {
  name: 'ld c, e',
  opcode: '4b',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, e';
  }
};
