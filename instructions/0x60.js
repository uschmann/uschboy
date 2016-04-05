module.exports = {
  name: 'ld h, b',
  opcode: '60',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, b';
  }
};
