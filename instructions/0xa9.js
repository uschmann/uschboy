module.exports = {
  name: 'xor c',
  opcode: 'a9',
  cycles: 4,
  execute(cpu) {
    cpu.regs.a = cpu.regs.a ^ cpu.regs.c;

    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.resetHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return `xor c`;
  }
};
