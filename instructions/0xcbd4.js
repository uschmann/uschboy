module.exports = {
  name: 'set 2, h',
  opcode: 'cbd4',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h |= ((1 << 2) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 2, h';
  }
};
