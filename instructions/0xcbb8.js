module.exports = {
  name: 'res 7, b',
  opcode: 'cbb8',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b &= (~(1 << 7) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 7, b';
  }
};
