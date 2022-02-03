const { readdirSync } = require("fs");
const { exec } = require("child_process");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => source + "/" + dirent.name);

let urlsToParse = [];
const topLevelDirectories = getDirectories("./src/pages");
topLevelDirectories.forEach((url) => {
  urlsToParse = urlsToParse.concat(getDirectories(url));
});
console.log(urlsToParse);
urlsToParse.forEach((url) => {
  const parts = url.split("/");
  const file = parts.at(-1);
  const folder = parts.at(-2);
  //TODO: check if it overwrites (i think so)
  //TODO: check if we need to recreate the pdf
  exec(
    `npm run pdf -- http://localhost:3000/${folder}/${file} ./pdfs/${folder}/${file}.pdf`, //TODO: env
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
});
