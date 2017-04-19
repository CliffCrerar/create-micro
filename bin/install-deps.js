// Packages
const {cd, exec, which} = require('shelljs')

const hasYarn = () => !!which('yarn')

module.exports = {
  hasYarn,
  install: path => new Promise((resolve, reject) => {
    cd(path)
    let installCmd = 'npm install'
    if (hasYarn()) {
      installCmd = 'yarn'
    }

    exec(installCmd, (code, stdout, stderr) => {
      if (code === 0) {
        resolve()
      } else {
        reject(stderr)
      }
    })
  })
}