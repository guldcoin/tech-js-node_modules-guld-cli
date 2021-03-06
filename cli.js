#!/usr/bin/env node
const program = require('commander')
const thispkg = require(`${__dirname}/package.json`)
const runCLI = require('guld-cli-run')

const COMMANDS = {
  'user': ['Guld user management tools. Get, list, and check users.'],
  'env': ['Guld environment detection.'],
  'git': ['Git tools and commands.'],
  'mail': ['Guld mail is a signed, encrypted, and witnessed email system.'],
  'keys': ['Cryptographic key storage and usage.'],
  'pass': ['Encrypted password management comaptible with passwordstore.org.'],
  'ledger': ['Guld ledger manager.'],
  'random': ['Cryptographically secure random number (& string) generator.'],
  'fs': ['Guld filesystem tools.'],
  'sdk': ['Guld Software Developer Kit.']
}

program
  .name(thispkg.name.replace('-cli', ''))
  .version(thispkg.version)
  .description(thispkg.description)
  .option('-u --user <name>', 'The user name to run as.', (n) => {
    if (n) process.env.GULDNAME = global.GULDNAME = n
    return true
  })
/*
program
  .command('init')
  .description('Initialize a guld account and services.')
  .action(async options => {
    console.log(options)
    await pexec('guld-user', ['init'], { env: process.env, stdin: 'inherit' })
    await pexec('guld-mail', ['init'], { env: process.env, stdin: 'inherit' })
    await pexec('guld-keys', ['init'], { env: process.env, stdin: 'inherit' })
    await pexec('guld-pass', ['init'], { env: process.env, stdin: 'inherit' })
    await pexec('guld-git-host', ['init'], { env: process.env, stdin: 'inherit' })
  })
*/
// .option('-q, --quiet', '')

for (var cmd in COMMANDS) {
  var cmds = COMMANDS[cmd]
  var desc = cmds.shift()
  if (cmds.length > 0) {
    program.command(cmd, desc, ...cmds)
  } else {
    program.command(cmd, desc)
  }
}

/* eslint-enable no-console */
runCLI.bind(program)()
module.exports = program
