module.exports = {
  name: 'sbc a, #',
  opcode: 'de',
  cycles: 8,
  execute(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);

    const value = n + (cpu.isCarry() ? 1 : 0);
    const result = (cpu.regs.a - value);

    result == 0 ? cpu.setZero() : cpu.resetZero();
    ((cpu.regs.a & 0x0F) - (n & 0x0F) - (cpu.isCarry() ? 1 : 0)) < 0 ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    result < 0 ? cpu.setCarry() : cpu.resetCarry();
    cpu.setSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `sbc a, ${cpu.memory.readByte(cpu.regs.pc + 1).toString(16)}`;
  }
};
