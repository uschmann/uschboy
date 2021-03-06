module.exports = {
  name: 'res 6, h',
  opcode: 'cbb4',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h &= (~(1 << 6) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 6, h';
  }
};
