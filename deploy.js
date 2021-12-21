require("dotenv").config();
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 22,
  localRoot: "/Users/holbech/deleteme/courses-s2022/dist/",
  remoteRoot: "/customers/7/0/c/kea-alt-del.dk/httpd.www/courses-s2022/",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*"], //*.php", "dist/*", ".*
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: true,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
