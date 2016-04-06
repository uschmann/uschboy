module.exports = {
  name: 'ld c, a',
  opcode: '4f',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, a';
  }
};
