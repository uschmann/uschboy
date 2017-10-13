module.exports = {
  name: 'set 0, l',
  opcode: 'cbc5',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l |= ((1 << 0) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 0, l';
  }
};
