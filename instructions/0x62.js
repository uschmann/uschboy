module.exports = {
  name: 'ld h, d',
  opcode: '62',
  cycles: 4,
  execute(cpu) {
    cpu.regs.h = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld h, d';
  }
};
