module.exports = {
  name: 'set 7, l',
  opcode: 'cbfd',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l |= ((1 << 7) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 7, l';
  }
};
