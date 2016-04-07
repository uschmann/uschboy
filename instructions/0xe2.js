module.exports = {
  name: 'ld [$FF00+c], a',
  opcode: 'e2',
  cycles: 8,
  execute(cpu) {
    var addr = 0xFF00 + cpu.regs.c;
    cpu.memory.writeByte(addr, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [$FF00 + c], a';
  }
};
