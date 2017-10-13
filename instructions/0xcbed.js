module.exports = {
  name: 'set 5, l',
  opcode: 'cbes',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l |= ((1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 5, l';
  }
};
