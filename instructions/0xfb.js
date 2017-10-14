module.exports = {
  name: 'ei',
  opcode: 'fb',
  cycles: 4,
  execute(cpu) {
    //console.log('TODO: Implement ei (0xf3)');
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `fb`;
  }
};
