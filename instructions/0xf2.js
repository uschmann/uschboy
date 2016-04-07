module.exports = {
  name: 'ld a, [$FF00+c]',
  opcode: 'f2',
  cycles: 8,
  execute(cpu) {
    var addr = 0xFF00 + cpu.regs.c;
    cpu.regs.a = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld a, [$FF00 + c]';
  }
};
