module.exports = {
  name: 'set 3, e',
  opcode: 'cbdb',
  cycles: 8,
  execute(cpu) {
    cpu.regs.e |= ((1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 3, e';
  }
};
