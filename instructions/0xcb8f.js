module.exports = {
  name: 'res 1, a',
  opcode: 'cb8f',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a &= (~(1 << 1) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 1, a';
  }
};
