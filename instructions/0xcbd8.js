module.exports = {
  name: 'set 3, b',
  opcode: 'cbd8',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b |= ((1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 3, b';
  }
};
