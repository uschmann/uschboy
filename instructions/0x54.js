module.exports = {
  name: 'ld d, h',
  opcode: '54',
  cycles: 4,
  execute(cpu) {
    cpu.regs.d = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld d, h';
  }
};
