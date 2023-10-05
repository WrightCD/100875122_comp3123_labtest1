/*
Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
*/
let fs = require("fs");
let path = require("path");

const logsFolder = __dirname + "/Logs";

if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder);
}

process.chdir(logsFolder);

for (let i = 0; i < 10; i++) {
  let logFile = `log${i}.txt`;
  let logFilePath = logsFolder + "/" + logFile;

  fs.writeFileSync(logFilePath, "Log file" + i + " has some writing in it");

  console.log(logFile);
}
