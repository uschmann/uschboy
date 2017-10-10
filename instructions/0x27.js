module.exports = {
  name: 'daa',
  opcode: '27',
  cycles: 4,
  execute(cpu) {

    if(!cpu.isSubtract()) {
      if(cpu.regs.a > 0x99 || cpu.isCarry()) {
        cpu.regs.a = (cpu.regs.a + 0x60) & 0xFF;
        cpu.setCarry();
      }
      if((cpu.regs.a & 0x0F) > 0x09 || cpu.isHalfCarry()) {
        cpu.regs.a = (cpu.regs.a + 0x06) & 0xFF;
        cpu.resetHalfCarry();
      }
    }
    else if(cpu.isCarry() && cpu.isHalfCarry()) {
      cpu.regs.a = (cpu.regs.a + 0x9A) & 0xFF;
      cpu.resetHalfCarry();
    }
    else if(cpu.isCarry()) {
      cpu.regs.a = (cpu.regs.a + 0xA0) & 0xFF;
    }
    else if(cpu.isHalfCarry()) {
      cpu.regs.a = (cpu.regs.a + 0xFA) & 0xFF;
      cpu.resetHalfCarry();
    }
    cpu.regs.a == 0 ? cpu.setZero() : cpu.resetZero();

    cpu.regs.pc = (cpu.regs.pc + 1) & 0xFFFF;
    return 4;
  },
  disasm(cpu) {
    return 'daa';
  }
};
