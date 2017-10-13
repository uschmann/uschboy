module.exports = {
  name: 'set 4, c',
  opcode: 'cbe1',
  cycles: 8,
  execute(cpu) {
    cpu.regs.c |= ((1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 4, c';
  }
};
