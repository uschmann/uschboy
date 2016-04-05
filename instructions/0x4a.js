module.exports = {
  name: 'ld c, d',
  opcode: '4a',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, d';
  }
};
