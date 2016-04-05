module.exports = {
  name: 'ld b, c',
  opcode: '41',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, c';
  }
};
