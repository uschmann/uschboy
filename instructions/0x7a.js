module.exports = {
  name: 'ld a, d',
  opcode: '7a',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.d;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, d';
  }
};
