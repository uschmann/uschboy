module.exports = {
  name: 'inc sp',
  opcode: '33',
  cycles: 8,
  execute(cpu) {
    cpu.regs.sp = (cpu.regs.sp + 1) & 0xFFFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'inc sp';
  }
};
