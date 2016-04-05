module.exports = {
  name: 'ld d, e',
  opcode: '53',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, e';
  }
};
