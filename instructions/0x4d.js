module.exports = {
  name: 'ld c, l',
  opcode: '4d',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, l';
  }
};
