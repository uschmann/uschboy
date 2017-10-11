module.exports = {
  name: 'rr [hl]',
  opcode: 'cb1e',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8) | cpu.regs.l;
    var tmp = cpu.memory.readByte(addr);
    var wasCarry = cpu.isCarry();

    ((tmp & 1) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    tmp = ((tmp >> 1) | (wasCarry ? 0x80 : 0)) & 0xFF;
    tmp == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.memory.writeByte(addr, tmp);

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'rr [hl]';
  }
};
