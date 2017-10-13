module.exports = {
  name: 'set 4, b',
  opcode: 'cbe0',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b |= ((1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 4, b';
  }
};
