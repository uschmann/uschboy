module.exports = {
  name: 'rla',
  opcode: '17',
  cycles: 4,
  execute(cpu) {
    var wasCarry = cpu.isCarry();
    ((cpu.regs.a & (1 << 7)) > 0) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetHalfCarry();
    cpu.resetSubtract();

    cpu.regs.a = ((cpu.regs.a << 1) + (wasCarry ? 1 : 0)) & 0xFF;
    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'rla';
  }
};
