module.exports = {
  name: 'adc a, d',
  opcode: '8a',
  cycles: 4,
  execute(cpu) {
    var result = cpu.regs.a + cpu.regs.d;
    if(cpu.isCarry()) { result += 1; }
    ((result & 0xFF) == 0) ? cpu.setZero() : cpu.resetZero();
    ((result & 0x0F) < (cpu.regs.a & 0x0F)) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    (result > 0xFF) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'adc a, d';
  }
};