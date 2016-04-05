module.exports = {
  name: 'ld h, e',
  opcode: '63',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, e';
  }
};
