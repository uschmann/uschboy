module.exports = {
  name: 'res 0, e',
  opcode: 'cb83',
  cycles: 8,
  execute(cpu) {
    cpu.regs.e &= (~(1 << 0) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 0, e';
  }
};
