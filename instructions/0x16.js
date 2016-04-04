module.exports = {
  name: 'ld d, n',
  opcode: '16',
  cycles: 8,
  execute(cpu) {
    cpu.regs.d = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld d, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
