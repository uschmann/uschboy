module.exports = {
  name: 'jp nz, nn',
  opcode: 'c2',
  cycles: 12,
  execute(cpu) {
    if(!cpu.isZero()) {
        cpu.regs.pc = cpu.memory.readWord(cpu.regs.pc+1);
    }
    else {
        cpu.regs.pc = (cpu.regs.pc + 3) & 0xFFFF;
    }
    return 12;
  },
  disasm(cpu) {
    var addr = cpu.memory.readWord(cpu.regs.pc+1).toString(16);
    return 'jp nz, ' + '$' + addr;
  }
};
