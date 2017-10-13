module.exports = {
  name: 'set 7, [hl]',
  opcode: 'cbfe',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    var value = cpu.memory.readByte(addr);
    cpu.memory.writeByte(addr, value | ((1 << 7) & 0xFF));

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'set 7, [hl]';
  }
};
