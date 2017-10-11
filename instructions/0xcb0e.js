module.exports = {
  name: 'rrc [hl]',
  opcode: 'cb0e',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8) | cpu.regs.l;
    var tmp = cpu.memory.readByte(addr);

    ((tmp & 1) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    tmp = ((tmp >> 1) | (((tmp & 1) > 0) ? 0x80 : 0)) & 0xFF;
    tmp == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.memory.writeByte(addr, tmp);

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'rrc [hl]';
  }
};
