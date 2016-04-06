module.exports = {
  name: 'ld b, a',
  opcode: '47',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.a;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, a';
  }
};
