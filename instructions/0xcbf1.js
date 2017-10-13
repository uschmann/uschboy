module.exports = {
  name: 'set 6, c',
  opcode: 'cbf1',
  cycles: 8,
  execute(cpu) {
    cpu.regs.c |= ((1 << 6) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 6, c';
  }
};
