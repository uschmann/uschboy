module.exports = {
  name: 'pop af',
  opcode: 'f1',
  cycles: 12,
  execute(cpu) {
    cpu.regs.a = cpu.memory.readByte(cpu.regs.sp + 1);
    cpu.regs.f = cpu.memory.readByte(cpu.regs.sp) & 0xF0;
    cpu.regs.sp += 2;
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    return 'pop af';
  }
};
