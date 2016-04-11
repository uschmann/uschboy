module.exports = {
  name: 'ld [hl+], a',
  opcode: '22',
  cycles: 8,
  execute(cpu) {
    var addr = cpu.regs.h<<8 | cpu.regs.l;
    cpu.memory.writeByte(addr, cpu.regs.a);
    addr++;
    cpu.regs.h = (addr>>8) & 0xFF;
    cpu.regs.l = addr & 0xFF;
    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld [hl+], a';
  }
};
