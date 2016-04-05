module.exports = {
  name: 'ld d, d',
  opcode: '52',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, d';
  }
};
