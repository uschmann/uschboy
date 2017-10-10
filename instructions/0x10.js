module.exports = {
  name: 'stop',
  opcode: '10',
  cycles: 4,
  execute(cpu) {
    console.log('TODO: Implement STOP (0x10)');
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `stop`;
  }
};
