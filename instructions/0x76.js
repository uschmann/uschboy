module.exports = {
  name: 'halt',
  opcode: '76',
  cycles: 4,
  execute(cpu) {
    console.log('TODO: Implement HALT (0x76)');
    return 4;
  },
  disasm(cpu) {
    return `halt`;
  }
};
