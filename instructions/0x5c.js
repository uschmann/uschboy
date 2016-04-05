module.exports = {
  name: 'ld e, h',
  opcode: '5c',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, h';
  }
};
