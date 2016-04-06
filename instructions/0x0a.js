module.exports = {
  name: 'ld a, [bc]',
  opcode: '0a',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.b << 8 | cpu.regs.c) & 0xFFFF;
    cpu.regs.a = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld a, [bc]';
  }
};
