module.exports = {
  name: 'cpl',
  opcode: '2f',
  cycles: 4,
  execute(cpu) {

    cpu.regs.a = cpu.regs.a ^ 0xFF;

    cpu.setSubtract();
    cpu.setHalfCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `cpl`;
  }
};
