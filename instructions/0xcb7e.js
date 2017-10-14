module.exports = {
  name: 'bit 7, [hl]',
  opcode: 'cb7e',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;

    (cpu.memory.readByte(addr) & (1 << 7)) == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'bit 7, [hl]';
  }
};
