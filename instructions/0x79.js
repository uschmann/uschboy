module.exports = {
  name: 'ld a, c',
  opcode: '79',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.c;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, c';
  }
};
