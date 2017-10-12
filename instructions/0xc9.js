module.exports = {
  name: 'ret',
  opcode: 'c9',
  cycles: 8,
  execute(cpu) {
    cpu.regs.pc = cpu.memory.readWord(cpu.regs.sp);
    cpu.regs.sp = (cpu.regs.sp + 2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'ret';
  }
};
