module.exports = {
  name: 'set 5, h',
  opcode: 'cbec',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h |= ((1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 5, h';
  }
};
