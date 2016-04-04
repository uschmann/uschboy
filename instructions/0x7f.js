module.exports = {
  name: 'ld a, a',
  opcode: '7f',
  cycles: 4,
  execute(cpu) {
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, a';
  }
};
