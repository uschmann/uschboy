module.exports = {
  name: 'set 1, l',
  opcode: 'cbcd',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l |= ((1 << 1) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 1, l';
  }
};
