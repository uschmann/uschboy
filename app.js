var readlineSync = require('readline-sync');
const GbCpu = require('./GbCpu');
const GbMemory = require('./GbMemory');

function onLoad(rom) {
  var isRunning = true;
  var isDebugging = true;
  var gbCpu = new GbCpu(new GbMemory());
  gbCpu.loadRom(rom);
  
  while(isRunning) {
    console.log(gbCpu.fetchInstruction().disasm(gbCpu));
    gbCpu.step();

    if(isDebugging) {
      var cmd = readlineSync.question('>');
      switch(cmd) {
        case 'regs':
          printRegs(gbCpu);
          readlineSync.question('');
          break;
        case 'run':
          isDebugging = false;
          break;
        case 'exit':
          isRunning = false;
          break;
      }
    }

  }
}

function printRegs(gbCpu) {
  for (var reg in gbCpu.regs) {
    if (gbCpu.regs.hasOwnProperty(reg)) {
        console.log(reg + ' = ' + gbCpu.regs[reg].toString(16));
    }
  }
}

var fs = require('fs');

fs.readFile('../dmg-start/build/main.gb', function(status, data) {
    if (status) {
        console.log(status.message);
        return;
    }
    var rom = [];
    for(var i=0; i<data.length; i++) {
      rom.push(data.readUInt8(i));
    }
    onLoad(rom);
});
