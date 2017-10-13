module.exports = {
  name: 'set 0, b',
  opcode: 'cbc0',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b |= ((1 << 0) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 0, b';
  }
};
