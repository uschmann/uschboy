module.exports = {
  name: 'sub a, l',
  opcode: '95',
  cycles: 4,
  execute(cpu) {
    const value = cpu.regs.l;
    const result = (cpu.regs.a - value) & 0xFF;

    result == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.regs.a < value ? cpu.setCarry() : cpu.resetCarry();
    (value & 0x0F) > (cpu.regs.a & 0x0F) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.setSubtract();

    cpu.regs.a = result;

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    const value = cpu.memory.readByte(cpu.regs.pc+1);
    return `sub a, l`;
  }
};
