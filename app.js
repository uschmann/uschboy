var readlineSync = require('readline-sync');
const GbCpu = require('./GbCpu');
const GbMemory = require('./GbMemory');

const filename = process.argv.length > 2 ? process.argv[2] : '../dmg-start/build/main.gb';
console.log(filename);

function onLoad(rom) {
  var isRunning = true;
  var isDebugging = true;
  var gbCpu = new GbCpu(new GbMemory());

  gbCpu.loadRom(rom);
  var i = 0;
  while(isRunning) {

    console.log(`${gbCpu.regs.pc.toString(16)} : ${gbCpu.fetchInstruction().disasm(gbCpu)}`);
    gbCpu.step();
    printRegs(gbCpu);
    if(isDebugging) {
      var input = readlineSync.question('>').split(' ');
      var cmd = input[0];
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
        case 'show':
          var addr = Number.parseInt(input[1], 16);
          console.log(gbCpu.memory.data[addr].toString(16));
          break;
        case 'stack':
          var sp = gbCpu.regs.sp;
          while(sp < 0xfffe) {
            var str = sp.toString(16) + ' => ';
            str += gbCpu.memory.readWord(sp).toString(16);
            console.log(str);
            sp += 2;
          }
          break;
        case 'dump':
          for(var i = 0x8000; i < 0x8010; i++) {
              console.log(i.toString(16) + ' : ' + gbCpu.memory.readByte(i).toString(16));
          }
          break;
      }
    }

    for(var i = 0x8000; i < 0x8010; i++) {
        console.log(i.toString(16) + ' : ' + gbCpu.memory.readByte(i).toString(16));
    }

  }
}

function printRegs(gbCpu) {
  for (var reg in gbCpu.regs) {
    if (gbCpu.regs.hasOwnProperty(reg)) {
        console.log(reg + ' = ' + gbCpu.regs[reg].toString(16));
    }
  }
  console.log('------');
  console.log(`z: ${gbCpu.isZero()}`);
  console.log(`n: ${gbCpu.isSubtract()}`);
  console.log(`h: ${gbCpu.isHalfCarry()}`);
  console.log(`c: ${gbCpu.isCarry()}`);
  console.log('------');
}

var fs = require('fs');

fs.readFile(filename, function(status, data) {
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
