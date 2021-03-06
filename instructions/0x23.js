module.exports = {
  name: 'inc hl',
  opcode: '23',
  cycles: 8,
  execute(cpu) {
    var val = (((cpu.regs.h << 8) | cpu.regs.l) + 1 ) & 0xFFFF;
    cpu.regs.h = (val >> 8) & 0xFF;
    cpu.regs.l = val & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'inc hl';
  }
};
