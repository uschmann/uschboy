module.exports = {
  name: 'ld l, a',
  opcode: '6f',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, a';
  }
};
