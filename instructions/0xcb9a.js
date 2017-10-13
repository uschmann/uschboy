module.exports = {
  name: 'res 3, d',
  opcode: 'cb9a',
  cycles: 8,
  execute(cpu) {
    cpu.regs.d &= (~(1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 3, d';
  }
};
