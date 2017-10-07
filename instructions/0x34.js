module.exports = {
  name: 'inc [hl]',
  opcode: '34',
  cycles: 12,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    var value = cpu.memory.readByte(addr);
    var result = (value + 1) & 0xFF;
    cpu.memory.writeByte(addr, result);

    result == 0 ? cpu.setZero() : cpu.resetZero();
    (result & 0x0F) == 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    return `inc [hl]`;
  }
};
