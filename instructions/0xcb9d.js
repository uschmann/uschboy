module.exports = {
  name: 'res 3, l',
  opcode: 'cb9l',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l &= (~(1 << 3) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 3, l';
  }
};
