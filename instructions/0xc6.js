module.exports = {
  name: 'add a, n',
  opcode: 'c6',
  cycles: 8,
  execute(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    var result = cpu.regs.a + n;
    ((result & 0xFF) == 0) ? cpu.setZero() : cpu.resetZero();
    ((result & 0x0F) < (cpu.regs.a & 0x0F)) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    (result > 0xFF) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+2) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    var n = cpu.memory.readByte(cpu.regs.pc + 1);
    return `add a, ${n.toString(16)}`;
  }
};
