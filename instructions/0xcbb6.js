module.exports = {
  name: 'res 6, [hl]',
  opcode: 'cbb6',
  cycles: 16,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    var value = cpu.memory.readByte(addr);
    cpu.memory.writeByte(addr, value & (~(1 << 6) & 0xFF));

    cpu.regs.pc = (cpu.regs.pc + 2) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    return 'res 6, [hl]';
  }
};
