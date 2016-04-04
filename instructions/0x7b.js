module.exports = {
  name: 'ld a, e',
  opcode: '7b',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.e;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'ld a, e';
  }
};
