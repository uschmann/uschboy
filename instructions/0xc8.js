module.exports = {
  name: 'ret z',
  opcode: 'c8',
  cycles: 8,
  execute(cpu) {
    if(cpu.isZero()) {
      cpu.regs.pc = cpu.memory.readWord(cpu.regs.sp);
      cpu.regs.sp = (cpu.regs.sp + 2) & 0xFFFF;
    }
    else {
      cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    }

    return 8;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'ret z';
  }
};
