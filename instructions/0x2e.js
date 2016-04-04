module.exports = {
  name: 'ld l, n',
  opcode: '2e',
  cycles: 8,
  execute(cpu) {
    cpu.regs.l = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld l, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
