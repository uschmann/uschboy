module.exports = {
  name: 'ld c, b',
  opcode: '48',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, b';
  }
};
