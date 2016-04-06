module.exports = {
  name: 'ld a, [de]',
  opcode: '1a',
  cycles: 8,
  execute(cpu) {
    var addr = (cpu.regs.d << 8 | cpu.regs.e) & 0xFFFF;
    cpu.regs.a = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld a, [de]';
  }
};
