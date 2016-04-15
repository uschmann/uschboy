module.exports = {
  name: 'ld [nn], sp',
  opcode: '08',
  cycles: 20,
  execute(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc + 1);
    cpu.memory.writeWord(addr, cpu.regs.sp);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 20;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc + 1);
    return `ld [${addr.toString(16)}], sp`;
  }
};
