module.exports = {
  name: 'ld [de], a',
  opcode: '12',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.d << 8 | cpu.regs.e) & 0xFFFF;
    cpu.memory.writeByte(addr, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [de], a';
  }
};
