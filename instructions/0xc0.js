module.exports = {
  name: 'ret nz',
  opcode: 'c0',
  cycles: 8,
  execute(cpu) {
    if(!cpu.isZero()) {
      cpu.regs.pc = cpu.memory.readWord(cpu.regs.sp);
      cpu.regs.sp = (cpu.regs.sp + 2) & 0xFFFF;
    }
    else {
      cpu.regs.cp = (cpu.regs.cp + 1) & 0xFFFF;
    }

    return 8;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'ret nz';
  }
};
