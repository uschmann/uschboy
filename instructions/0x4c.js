module.exports = {
  name: 'ld c, h',
  opcode: '4c',
  cycles: 4,
  execute(cpu) {
    cpu.regs.c = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld c, h';
  }
};
