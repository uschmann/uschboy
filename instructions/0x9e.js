module.exports = {
  name: 'sbc a, [hl]',
  opcode: '9e',
  cycles: 8,
  execute(cpu) {
    var addr = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    var n = cpu.memory.readByte(addr);

    const value = n + (cpu.isCarry() ? 1 : 0);
    const result = (cpu.regs.a - value);

    result == 0 ? cpu.setZero() : cpu.resetZero();
    ((cpu.regs.a & 0x0F) - (n & 0x0F) - (cpu.isCarry() ? 1 : 0)) < 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    result < 0 ? cpu.setCarry() : cpu.resetCarry();
    cpu.setSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `sbc a, [hl]`;
  }
};
