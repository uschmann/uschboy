module.exports = {
  name: 'ld [hl], l',
  opcode: '75',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    cpu.memory.writeByte(addr, cpu.regs.l);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [hl], l';
  }
};
