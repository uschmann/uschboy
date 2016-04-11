module.exports = {
  name: 'ld de, nn',
  opcode: '11',
  cycles: 12,
  execute(cpu) {
    cpu.regs.d = cpu.memory.readByte(cpu.regs.pc + 2);
    cpu.regs.e = cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var value = cpu.memory.readWord(cpu.regs.pc + 1);
    return `ld de ${value.toString(16)}`;
  }
};
