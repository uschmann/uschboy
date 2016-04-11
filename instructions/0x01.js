module.exports = {
  name: 'ld bc, nn',
  opcode: '01',
  cycles: 12,
  execute(cpu) {
    cpu.regs.b = cpu.memory.readByte(cpu.regs.pc + 2);
    cpu.regs.c = cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var value = cpu.memory.readWord(cpu.regs.pc + 1);
    return `ld bc ${value.toString(16)}`;
  }
};
