module.exports = {
  name: 'pop de',
  opcode: 'd1',
  cycles: 12,
  execute(cpu) {
    cpu.regs.d = cpu.memory.readByte(cpu.regs.sp + 1);
    cpu.regs.e = cpu.memory.readByte(cpu.regs.sp);
    cpu.regs.sp += 2;
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    return 'pop de';
  }
};
