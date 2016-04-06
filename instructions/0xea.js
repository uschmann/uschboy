module.exports = {
  name: 'ld [nn], a',
  opcode: 'ea',
  cycles: 8,
  execute(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc + 1);
    cpu.memory.writeByte(addr, cpu.regs.a);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'ld [nn], a';
  }
};
