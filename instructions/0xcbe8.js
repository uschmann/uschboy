module.exports = {
  name: 'set 5, b',
  opcode: 'cbe8',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b |= ((1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 5, b';
  }
};
