module.exports = {
  name: 'ld a, l',
  opcode: '7d',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, l';
  }
};
