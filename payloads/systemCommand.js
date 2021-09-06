const Tefs = require('fs');
const Tepath = require("path")
const Teos = require("os")
const Teproc = require("process")
const { exec } = require('child_process');

let TEpid = String(Teproc.pid)

//check if lock file exists
if (!Tefs.existsSync(Tepath.join(Teos.tmpdir(),`${TEpid}.lock`))){
  //Create lock file
  Tefs.writeFile(Tepath.join(Teos.tmpdir(),`${Date.now()}.lock`),"", (err) => {
    if (err) {
      console.log(err)
    }
  });

Tefs.writeFile(Tepath.join(Teos.tmpdir(),`${TEpid}.lock`),"", (err) => {
    if (err) {
      console.log(err)
    }
  });

  exec('touch /tmp/asdasdasdasdads',(err)=>{
    if (err) console.log(err)
  })


}

/////


