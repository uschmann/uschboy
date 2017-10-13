module.exports = {
  name: 'set 5, d',
  opcode: 'cbea',
  cycles: 8,
  execute(cpu) {
    cpu.regs.d |= ((1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 5, d';
  }
};
