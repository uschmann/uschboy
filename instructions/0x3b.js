module.exports = {
  name: 'dec sp',
  opcode: '3b',
  cycles: 8,
  execute(cpu) {
    cpu.regs.sp = (cpu.regs.sp - 1) & 0xFFFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'dec sp';
  }
};
