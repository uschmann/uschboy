module.exports = {
  name: 'res 5, a',
  opcode: 'cb9f',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a &= (~(1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 5, a';
  }
};
