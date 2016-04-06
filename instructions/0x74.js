module.exports = {
  name: 'ld [hl], h',
  opcode: '74',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    cpu.memory.writeByte(addr, cpu.regs.h);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [hl], h';
  }
};
