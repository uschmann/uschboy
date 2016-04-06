module.exports = {
  name: 'ld d, a',
  opcode: '57',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, a';
  }
};
