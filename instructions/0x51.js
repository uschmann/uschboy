module.exports = {
  name: 'ld d, c',
  opcode: '51',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, c';
  }
};
