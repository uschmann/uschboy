module.exports = {
  name: 'ld b, n',
  opcode: '06',
  cycles: 8,
  execute(cpu) {
    cpu.regs.b = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld b, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
