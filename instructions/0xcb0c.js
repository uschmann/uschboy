module.exports = {
  name: 'rrc h',
  opcode: 'cb0c',
  cycles: 8,
  execute(cpu) {
    var reg = 'h';

    ((cpu.regs[reg] & 1) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs[reg] = ((cpu.regs[reg] >> 1) | (((cpu.regs[reg] & 1) > 0) ? 0x80 : 0)) & 0xFF;
    cpu.regs[reg] == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'rrc h';
  }
};
