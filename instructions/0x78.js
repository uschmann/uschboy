module.exports = {
  name: 'ld a, b',
  opcode: '78',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.b;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, b';
  }
};
