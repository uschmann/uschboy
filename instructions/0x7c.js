module.exports = {
  name: 'ld a, h',
  opcode: '7c',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.h;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, h';
  }
};
