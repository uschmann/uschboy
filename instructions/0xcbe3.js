module.exports = {
  name: 'set 4, e',
  opcode: 'cbe3',
  cycles: 8,
  execute(cpu) {
    cpu.regs.e |= ((1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 4, e';
  }
};
