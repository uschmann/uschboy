module.exports = {
  name: 'ld d, b',
  opcode: '50',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, b';
  }
};
