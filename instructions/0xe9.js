module.exports = {
  name: 'jp [hl]',
  opcode: 'e9',
  cycles: 4,
  execute(cpu) {
    cpu.regs.pc = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'jp [hl]'
  }
};
