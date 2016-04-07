module.exports = {
  name: 'ld [$FF00+n], a',
  opcode: 'e0',
  cycles: 12,
  execute(cpu) {
    var addr = 0xFF00 + cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.memory.writeByte(addr, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var addr = cpu.memory.readByte(cpu.regs.pc + 1).toString(16);
    return 'ld [$FF00 + $' + addr + '], a';
  }
};
