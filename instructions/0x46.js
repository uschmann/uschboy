module.exports = {
  name: 'ld b, [hl]',
  opcode: '46',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    cpu.regs.b = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld b, [hl]';
  }
};
