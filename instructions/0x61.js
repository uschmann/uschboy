module.exports = {
  name: 'ld h, c',
  opcode: '61',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, c';
  }
};
