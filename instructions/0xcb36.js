module.exports = {
  name: 'swap [hl]',
  opcode: 'cb36',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8) | cpu.regs.l;
    var tmp = cpu.memory.readByte(addr);
    tmp = (tmp >> 4) | ((tmp << 4) & 0xF0);
    cpu.memory.writeByte(addr, tmp);

    tmp == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'swap [hl]';
  }
};
