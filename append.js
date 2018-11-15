const fs = require("fs");
const concat = require("concat");
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);

// let great;
// let awesome;
// function appendit() {
//   try {
//     great = fs.openSync("great.js", "a");
//     awesome = fs.openSync("awsome.js", "a");
//     fs.appendFileSync(great, "awesome.js", "utf8");
//   } catch (err) {
//     /* Handle the error */
//   } finally {
//     if (great !== undefined) fs.closeSync(great);
//   }
//   //fs.appendFileSync(hello, 'utf8');
// }
let files;
const coding = fs.readFileSync("code.js");
fs.readFile("test.js", "utf8", async function(err, data) {
  if (err) throw err;
  fs.appendFileSync("code-test.js", coding, "utf8");
  fs.appendFileSync("code-test.js", data, "utf8");

  async function getVersion() {
    try {
      const { stdout } = await execFile("mocha", ["code-test.js"]);

      files = stdout;

      return files;
    } catch (err) {
      // const { stdout } = await execFile("mocha", ["code-test.js"]);
      files = err.stdout;

      console.log(err.stdout);
      return files;
    }
  }
  let getfiles = await getVersion();
  console.log("GETTHISFILE", getfiles);
  // execFile("mocha", ["code-test.js"], (err, stdout, stderr) => {
  //   if (err) {
  //     console.log(err);
  //     //throw err;
  //   }
  //   //fileToSend = stdout;
  //   //let files = stdout.toString();
  //   console.log(typeof stdout);
  // });
  //console.log("this is to send", fileToSend);
});

// const child = execFile("mocha", ["code-test.js"], (err, stdout, stderr) => {
//   if (err) {
//     throw err;
//   }
//   console.log(stdout);
// });
