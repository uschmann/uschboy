module.exports = {
  name: 'res 2, h',
  opcode: 'cb94',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h &= (~(1 << 2) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 2, h';
  }
};
