module.exports = {
  name: 'ld b, d',
  opcode: '42',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, d';
  }
};
