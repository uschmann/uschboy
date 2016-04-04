module.exports = {
  name: 'ld c, n',
  opcode: '0e',
  cycles: 8,
  execute(cpu) {
    cpu.regs.c = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld c, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
