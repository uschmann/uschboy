module.exports = {
  name: 'and [hl]',
  opcode: 'a6',
  cycles: 8,
  execute(cpu) {
    var addr = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    cpu.regs.a = cpu.regs.a & cpu.memory.readByte(addr);

    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();
    cpu.resetSubtract();
    cpu.setHalfCarry();
    cpu.resetCarry();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `and [hl]`;
  }
};
