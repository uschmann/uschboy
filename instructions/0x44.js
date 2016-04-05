module.exports = {
  name: 'ld b, h',
  opcode: '44',
  cycles: 4,
  execute(cpu) {
    cpu.regs.b = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld b, h';
  }
};
