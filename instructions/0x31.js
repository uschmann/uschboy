module.exports = {
  name: 'ld sp, nn',
  opcode: '31',
  cycles: 12,
  execute(cpu) {
    var high = cpu.memory.readByte(cpu.regs.pc + 2);
    var low = cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.regs.sp = (high<<8) | low;
    cpu.regs.pc = (cpu.regs.pc+3) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    var value = cpu.memory.readWord(cpu.regs.pc + 1);
    return `ld sp ${value.toString(16)}`;
  }
};
