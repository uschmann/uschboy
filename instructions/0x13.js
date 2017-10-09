module.exports = {
  name: 'inc de',
  opcode: '13',
  cycles: 8,
  execute(cpu) {
    var val = (((cpu.regs.d << 8) | cpu.regs.e) + 1 ) & 0xFFFF;
    cpu.regs.d = (val >> 8) & 0xFF;
    cpu.regs.e = val & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'inc de';
  }
};
