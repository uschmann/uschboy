module.exports = {
  name: 'res 7, e',
  opcode: 'cbbb',
  cycles: 8,
  execute(cpu) {
    cpu.regs.e &= (~(1 << 7) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 7, e';
  }
};
