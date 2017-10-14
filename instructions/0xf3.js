module.exports = {
  name: 'di',
  opcode: 'f3',
  cycles: 4,
  execute(cpu) {
    //console.log('TODO: Implement di (0xf3)');
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `f3`;
  }
};
