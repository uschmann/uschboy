module.exports = {
  name: 'ld h, l',
  opcode: '65',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, l';
  }
};
