module.exports = {
  name: 'ld b, l',
  opcode: '45',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, l';
  }
};
