module.exports = {
  name: 'ld h, h',
  opcode: '64',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, h';
  }
};
