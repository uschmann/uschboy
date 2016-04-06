module.exports = {
  name: 'ld [hl], n',
  opcode: '72',
  cycles: 12,
  execute(cpu) {
    var addr = (cpu.regs.h << 8 | cpu.regs.l) & 0xFFFF;
    var value = cpu.memory.readByte(cpu.regs.pc + 1);
    cpu.memory.writeByte(addr, value);
    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 12;
  },
  disasm(cpu) {
    return 'ld [hl], $' + cpu.memory.readByte(cpu.regs.pc + 1).toString(16) ;
  }
};
