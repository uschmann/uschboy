module.exports = {
  name: 'ld l, c',
  opcode: '69',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, c';
  }
};
