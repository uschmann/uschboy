module.exports = {
  name: 'push af',
  opcode: 'f5',
  cycles: 16,
  execute(cpu) {
    cpu.regs.sp -= 2;
    cpu.memory.writeByte(cpu.regs.sp, cpu.regs.f);
    cpu.memory.writeByte(cpu.regs.sp + 1, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'push af';
  }
};
