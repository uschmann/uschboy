module.exports = {
  name: 'cp [hl]',
  opcode: 'be',
  cycles: 8,
  execute(cpu) {
    var addr = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    const value = cpu.memory.readByte(addr);
    const result = (cpu.regs.a - value) & 0xFF;

    result == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.regs.a < value ? cpu.setCarry() : cpu.resetCarry();
    (value & 0x0F) > (cpu.regs.a & 0x0F) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    cpu.setSubtract();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `cp [hl]`;
  }
};
