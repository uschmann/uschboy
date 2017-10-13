module.exports = {
  name: 'set 1, h',
  opcode: 'cbcc',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h |= ((1 << 1) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 1, h';
  }
};
