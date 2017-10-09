module.exports = {
  name: 'inc bc',
  opcode: '03',
  cycles: 8,
  execute(cpu) {
    var val = (((cpu.regs.b << 8) | cpu.regs.c) + 1 ) & 0xFFFF;
    cpu.regs.b = (val >> 8) & 0xFF;
    cpu.regs.c = val & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'inc bc';
  }
};
