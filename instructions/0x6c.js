module.exports = {
  name: 'ld l, h',
  opcode: '6c',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, h';
  }
};
