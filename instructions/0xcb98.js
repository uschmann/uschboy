module.exports = {
  name: 'res 3, b',
  opcode: 'cb98',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b &= (~(1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 3, b';
  }
};
