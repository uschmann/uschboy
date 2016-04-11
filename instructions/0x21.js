module.exports = {
  name: 'ld hl, nn',
  opcode: '21',
  cycles: 12,
  execute(cpu) {
    cpu.regs.h = cpu.memory.readByte(cpu.regs.pc + 2);
    cpu.regs.l = cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var value = cpu.memory.readWord(cpu.regs.pc + 1);
    return `ld hl ${value.toString(16)}`;
  }
};
