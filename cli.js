#!/usr/bin/env node
const program = require('commander')
// const pify = require('pify')
// const fork = require('child_process').fork
const pkg = require('./package.json')
const VERSION = pkg.version

const COMMANDS = {
  'user': ['Guld user management tools. Get, list, and check users.'],
  'env': ['Guld environment detection.'],
  'git': ['Git tools and commands.'],
  'mail': ['Guld mail is a signed, encrypted, and witnessed email system.'],
  'keys': ['Cryptographic key storage and usage.'],
  'pass': ['Encrypted password management comaptible with passwordstore.org.'],
  'ledger': ['Guld ledger manager.'],
  'random': ['Cryptographically secure random number (& string) generator.'],
  'fs': ['Guld filesystem tools.']
}

program
  .name('guld')
  .version(VERSION)
  .description('Guld decentralized internet command line.')
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

program.parse(process.argv)
