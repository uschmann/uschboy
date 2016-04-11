module.exports = {
  name: 'ld a, [$FF00+n]',
  opcode: 'f0',
  cycles: 12,
  execute(cpu) {
    var addr = 0xFF00 + cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.regs.a = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    return `ld a, [$FF00 + ${n.toString(16)}]`;
  }
};
