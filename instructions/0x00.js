module.exports = {
  name: 'nop',
  opcode: '00',
  cycles: 4,
  execute(cpu) {
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'nop'
  }
};
