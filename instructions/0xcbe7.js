module.exports = {
  name: 'set 4, a',
  opcode: 'cbe7',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a |= ((1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 4, a';
  }
};
