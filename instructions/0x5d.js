module.exports = {
  name: 'ld e, l',
  opcode: '5d',
  cycles: 4,
  execute(cpu) {
    cpu.regs.e = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld e, l';
  }
};
