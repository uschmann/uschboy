module.exports = {
  name: 'res 0, d',
  opcode: 'cb82',
  cycles: 8,
  execute(cpu) {
    cpu.regs.d &= (~(1 << 0) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 0, d';
  }
};
