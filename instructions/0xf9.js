module.exports = {
  name: 'ld sp, hl',
  opcode: 'f9',
  cycles: 8,
  execute(cpu) {
    cpu.regs.sp = (cpu.regs.h<<8) | cpu.regs.l;
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld sp, hl';
  }
};
