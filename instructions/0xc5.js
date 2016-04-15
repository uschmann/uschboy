module.exports = {
  name: 'push bc',
  opcode: 'c5',
  cycles: 16,
  execute(cpu) {
    cpu.regs.sp -= 2;
    cpu.memory.writeByte(cpu.regs.sp, cpu.regs.c);
    cpu.memory.writeByte(cpu.regs.sp + 1, cpu.regs.b);
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'push bc';
  }
};
