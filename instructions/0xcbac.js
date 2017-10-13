module.exports = {
  name: 'res 5, h',
  opcode: 'cbac',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h &= (~(1 << 5) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 5, h';
  }
};
