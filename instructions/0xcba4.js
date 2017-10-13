module.exports = {
  name: 'res 4, h',
  opcode: 'cba4',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h &= (~(1 << 4) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 4, h';
  }
};
