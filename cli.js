#!/usr/bin/env node
const program = require('commander')
const pkg = require('./package.json')
const VERSION = pkg.version
const NAME = Object.keys(pkg.bin)[0]

const COMMANDS = {
  'user': ['Guld user management tools. Get, list, and check users of the guld group.', {isDefault: true}],
  'env': ['Guld environment detection.'],
  'git': ['Git tools and commands.'],
  'mail': ['Guld mail is a signed, encrypted, and witnessed email system.'],
  'keys': ['Guld key management.'],
  'pass': ['Encrypted password management.'],
  'ledger': ['Guld ledger.'],
  'fs': ['Guld filesystem tools.']
}

program
  .name('guld')
  .version(VERSION)
  .description('Guld decentralized internet command line.')
  .option('-u, --user', 'The user name to set up.')
  .option('-r, --recipient', 'The recipient of a message or transaction.')
  .option('-f, --fingerprint', 'The PGP fingerprint to sign with.')
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

module.exports = program
