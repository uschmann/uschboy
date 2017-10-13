module.exports = {
  name: 'set 2, a',
  opcode: 'cbd7',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a |= ((1 << 2) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 2, a';
  }
};
