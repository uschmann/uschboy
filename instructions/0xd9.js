module.exports = {
  name: 'reti',
  opcode: 'd9',
  cycles: 8,
  execute(cpu) {
    cpu.regs.pc = cpu.memory.readWord(cpu.regs.sp);
    cpu.regs.sp = (cpu.regs.sp + 2) & 0xFFFF;
    console.log('TODO: implement reti (0xd9)');
    return 8;
  },
  disasm(cpu) {
    return 'reti';
  }
};
