module.exports = {
  name: 'ld h, n',
  opcode: '26',
  cycles: 8,
  execute(cpu) {
    cpu.regs.h = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld h, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
