module.exports = {
  name: 'ld h, a',
  opcode: '67',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, a';
  }
};
