module.exports = {
  name: 'ld b, b',
  opcode: '40',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, b';
  }
};
