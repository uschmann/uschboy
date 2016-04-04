module.exports = {
  name: 'jp',
  opcode: 'c3',
  cycles: 12,
  execute(cpu) {
    cpu.regs.pc = cpu.memory.readWord(cpu.regs.pc+1);
    return 12;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'jp ' + '$' + addr;
  }
};
