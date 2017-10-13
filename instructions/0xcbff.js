module.exports = {
  name: 'set 7, a',
  opcode: 'cbff',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a |= ((1 << 7) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 7, a';
  }
};
