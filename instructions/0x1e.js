module.exports = {
  name: 'ld e, n',
  opcode: '1e',
  cycles: 8,
  execute(cpu) {
    cpu.regs.e = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld e, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
