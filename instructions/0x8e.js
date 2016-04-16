module.exports = {
  name: 'adc a, [hl]',
  opcode: '8e',
  cycles: 8,
  execute(cpu) {
    var addr = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    var n = cpu.memory.readByte(addr);
    var result = cpu.regs.a + n;
    if(cpu.isCarry()) { result += 1; }
    ((result & 0xFF) == 0) ? cpu.setZero() : cpu.resetZero();
    ((result & 0x0F) < (cpu.regs.a & 0x0F)) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    (result > 0xFF) ? cpu.setCarry() : cpu.resetCarry();
    cpu.resetSubtract();

    cpu.regs.a = result & 0xFF;

    cpu.regs.pc = (cpu.regs.pc+1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `adc a, [hl]`;
  }
};
