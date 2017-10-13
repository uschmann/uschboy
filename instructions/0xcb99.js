module.exports = {
  name: 'res 3, c',
  opcode: 'cb99',
  cycles: 8,
  execute(cpu) {
    cpu.regs.c &= (~(1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 3, c';
  }
};
