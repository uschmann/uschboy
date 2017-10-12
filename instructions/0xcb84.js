module.exports = {
  name: 'res 0, h',
  opcode: 'cb84',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h &= (~(1 << 0) & 0xFF);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'res 0, h';
  }
};
