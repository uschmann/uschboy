module.exports = {
  name: 'ld l, b',
  opcode: '68',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, b';
  }
};
