module.exports = {
  name: 'cp #',
  opcode: 'fe',
  cycles: 8,
  execute(cpu) {
    const value = cpu.memory.readByte(cpu.regs.pc + 1);
    const result = (cpu.regs.a - value) & 0xFF;

    result == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.regs.a < value ? cpu.setCarry() : cpu.resetCarry();
    (value & 0x0F) > (cpu.regs.a & 0x0F) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.setSubtract();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `cp $${cpu.memory.readByte(cpu.regs.pc + 1).toString(16)}`;
  }
};
