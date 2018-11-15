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
const coded =
  'const utils = {};\nutils.getInitials = str => {\nlet strArr = str.split(" ");\nlet initialsArr = [];\nfor (let i = 0; i < strArr.length; i++) {\ninitialsArr.push(strArr[i]);\n}\nreturn initialsArr.join("").toUpperCase();\n};';

const tested =
  '//hello\n"use strict";\n// Assertions\nconst { exec } = require("child_process");\nconst chai = require("chai");\nconst expect = chai.expect;\nconst chaiThings = require("chai-things");\n\ndescribe("`getInitials` utility method", () => {\nit("takes a string and returns a string", () => {\nconst initials = utils.getInitials("Corey Greenwald");\nexpect(initials).to.be.a("string");\n});\nit("returns the first letter of each word in the input string, capitalized", () => {\nconst initialsGHA = utils.getInitials("Grace Hopper Academy");\nexpect(initialsGHA).to.equal("GHA");\nconst initialsHATEOAS = utils.getInitials(\n"hypermedia as the engine of application state"\n);\nexpect(initialsHATEOAS).to.equal("HATEOAS");\n});\n});';
const coding = fs.readFileSync("code.js");
// fs.readFile("test.js", "utf8", async function(err, data) {
//   if (err) throw err;
//   fs.appendFileSync("code-test.js", coded, "utf8");
//   fs.appendFileSync("code-test.js", data, "utf8");

//   async function getVersion() {
//     try {
//       const { stdout } = await execFile("mocha", ["code-test.js"]);

//       files = stdout;

//       return files;
//     } catch (err) {
//       // const { stdout } = await execFile("mocha", ["code-test.js"]);
//       files = err.stdout;

//       console.log(err.stdout);
//       return files;
//     }
//   }
//   let getfiles = await getVersion();
//   console.log("GETTHISFILE", getfiles);
//   // execFile("mocha", ["code-test.js"], (err, stdout, stderr) => {
//   //   if (err) {
//   //     console.log(err);
//   //     //throw err;
//   //   }
//   //   //fileToSend = stdout;
//   //   //let files = stdout.toString();
//   //   console.log(typeof stdout);
//   // });
//   //console.log("this is to send", fileToSend);
// });

async function appendFiles(coded, tested) {
  coded = coded + "\n";
  await fs.appendFileSync("code-test.js", coded, "utf8");
  await fs.appendFileSync("code-test.js", tested, "utf8");

  async function getVersion() {
    try {
      const { stdout } = await execFile("mocha", ["code-test.js"]);

      files = stdout;

      return files;
    } catch (err) {
      files = err.stdout;

      //console.log(err.stdout);
      return files;
    }
  }
  let getfiles = await getVersion();

  console.log("GETTHISFILE", getfiles);
}

appendFiles(coded, tested);
