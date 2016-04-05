module.exports = {
  name: 'ld d, l',
  opcode: '55',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, l';
  }
};
