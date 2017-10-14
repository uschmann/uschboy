module.exports = {
  name: 'bit 5, [hl]',
  opcode: 'cb6e',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;

    (cpu.memory.readByte(addr) & (1 << 5)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'bit 5, [hl]';
  }
};
