module.exports = {
  name: 'set 1, [hl]',
  opcode: 'cbce',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    var value = cpu.memory.readByte(addr);
    cpu.memory.writeByte(addr, value | ((1 << 1) & 0xFF));

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'set 1, [hl]';
  }
};
