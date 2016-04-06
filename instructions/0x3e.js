module.exports = {
  name: 'ld a, n',
  opcode: '3e',
  cycles: 8,
  execute(cpu) {
    cpu.regs.a = cpu.memory.readByte(cpu.regs.pc+1);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return 'ld a, $' + cpu.memory.readByte(cpu.regs.pc+1).toString(16);
  }
};
