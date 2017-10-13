module.exports = {
  name: 'set 3, c',
  opcode: 'cbd9',
  cycles: 8,
  execute(cpu) {
    cpu.regs.c |= ((1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 3, c';
  }
};
