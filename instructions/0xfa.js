module.exports = {
  name: 'ld a, [nn]',
  opcode: 'fa',
  cycles: 16,
  execute(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc + 1);
    cpu.regs.a = cpu.memory.readByte(addr);
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 16;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc + 1).toString(16);
    return 'ld a, [' + addr + ']';
  }
};
