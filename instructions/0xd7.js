module.exports = {
  name: 'rst 10',
  opcode: 'd7',
  cycles: 32,
  execute(cpu) {
    cpu.regs.sp = (cpu.regs.sp - 2) & 0xFFFF;
    cpu.memory.writeWord(cpu.regs.sp, (cpu.regs.pc + 1) & 0xFFFF);
    cpu.regs.pc = 0x10;
    return 32;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'rst 10'
  }
};
