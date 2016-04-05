module.exports = {
  name: 'ld c, c',
  opcode: '49',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, c';
  }
};
