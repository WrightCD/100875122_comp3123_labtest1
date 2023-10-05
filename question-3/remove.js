/*
 remove all the files from the Logs directory, if exists
o output the file names to delet
*/
let fs = require("fs");
let path = require("path");

const logsFolder = __dirname + "/Logs";

if (fs.existsSync(logsFolder)) {
  const logFiles = fs.readdirSync(logsFolder);
  process.chdir(logsFolder);
  logFiles.forEach((log) => {
    console.log("delete files..." + log);
    fs.unlinkSync(log);
  });
}
