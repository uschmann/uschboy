module.exports = {
  name: 'ld l, e',
  opcode: '6b',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, e';
  }
};
