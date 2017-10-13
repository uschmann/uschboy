module.exports = {
  name: 'res 4, l',
  opcode: 'cba5',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l &= (~(1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 4, l';
  }
};
