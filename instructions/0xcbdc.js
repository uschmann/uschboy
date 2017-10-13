module.exports = {
  name: 'set 3, h',
  opcode: 'cbdc',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h |= ((1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'set 3, h';
  }
};
