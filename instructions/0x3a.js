module.exports = {
  name: 'ld a, [hl-]',
  opcode: '3a',
  cycles: 8,
  execute(cpu) {
    var addr = cpu.regs.h<<8 | cpu.regs.l;
    cpu.regs.a = cpu.memory.readByte(addr);
    addr--;
    cpu.regs.h = (addr>>8) & 0xFF;
    cpu.regs.l = addr & 0xFF;
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld a, [hl-]';
  }
};
