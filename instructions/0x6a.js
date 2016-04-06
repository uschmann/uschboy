module.exports = {
  name: 'ld l, d',
  opcode: '6a',
  cycles: 4,
  execute(cpu) {
    cpu.regs.l = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld l, d';
  }
};
