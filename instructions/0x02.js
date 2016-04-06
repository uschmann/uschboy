module.exports = {
  name: 'ld [bc], a',
  opcode: '02',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.b << 8 | cpu.regs.c) & 0xFFFF;
    cpu.memory.writeByte(addr, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [bc], a';
  }
};
