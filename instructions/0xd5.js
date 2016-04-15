module.exports = {
  name: 'push de',
  opcode: 'd5',
  cycles: 16,
  execute(cpu) {
    cpu.regs.sp -= 2;
    cpu.memory.writeByte(cpu.regs.sp, cpu.regs.e);
    cpu.memory.writeByte(cpu.regs.sp + 1, cpu.regs.d);
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'push de';
  }
};
