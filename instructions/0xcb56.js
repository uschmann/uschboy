module.exports = {
  name: 'bit 2, [hl]',
  opcode: 'cb56',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;

    (cpu.memory.readByte(addr) & (1 << 2)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'bit 2, [hl]';
  }
};
