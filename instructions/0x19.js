module.exports = {
  name: 'add hl, de',
  opcode: '19',
  cycles: 8,
  execute(cpu) {
    var val = ((cpu.regs.d << 8) | cpu.regs.e) & 0xFFFF;
    var hl = ((cpu.regs.h << 8) | cpu.regs.l) & 0xFFFF;
    var sum = hl + val;

    cpu.resetSubtract();
    (sum & 0xFFF) < (hl & 0xFFF) ? cpu.setHalfCarry() : cpu.resetHalfCarry();
    sum > 0xFFFF ? cpu.setCarry() : cpu.resetCarry();

    cpu.regs.h = (sum >> 8) & 0xFF;
    cpu.regs.l = sum & 0xFF;

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 8;
  },
  disasm(cpu) {
    return `add hl, de`;
  }
};
