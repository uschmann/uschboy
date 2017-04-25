module.exports = {
  name: 'sub a, #',
  opcode: 'd6',
  cycles: 8,
  execute(cpu) {
    const value = cpu.memory.readByte(cpu.regs.pc+1);
    const result = (cpu.regs.a - value) & 0xFF;

    result == 0 ? cpu.setZero() : cpu.resetZero();
    value > (cpu.regs.a & 0xF0) ? cpu.setCarry() : cpu.resetCarry();
    (value & 0x0F) > (cpu.regs.a & 0x0F) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.setSubtract();

    cpu.regs.a = result;

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    const value = cpu.memory.readByte(cpu.regs.pc+1);
    return `sub a, $${value}`;
  }
};
