module.exports = {
  name: 'ld b, e',
  opcode: '43',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, e';
  }
};
