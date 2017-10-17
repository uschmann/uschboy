module.exports = {
  name: 'ret nc',
  opcode: 'd0',
  cycles: 8,
  execute(cpu) {
    if(!cpu.isCarry()) {
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
    return 'ret nc';
  }
};
