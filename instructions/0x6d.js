module.exports = {
  name: 'ld l, l',
  opcode: '6d',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, l';
  }
};
