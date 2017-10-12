module.exports = {
  name: 'call nz, nn',
  opcode: 'c4',
  cycles: 12,
  execute(cpu) {
    if(!cpu.isZero()) {
      var addr = cpu.memory.readWord(cpu.regs.pc + 1);
      cpu.regs.sp = (cpu.regs.sp - 2) & 0xFFFF;
      cpu.memory.writeWord(cpu.regs.sp, (cpu.regs.pc + 3) & 0xFFFF);
      cpu.regs.pc = addr;
    }
    else {
      cpu.regs.pc = (cpu.regs.pc + 3) & 0xFFFF;
    }

    return 12;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'call nz, ' + '$' + addr;
  }
};
