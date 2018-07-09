# guld-cli

Universal wrapper for guld commands. Discovers `guld-*` commands and allows them to be called as `guld *` from the main script.

### Install

```
npm i -g guld-cli
```

### Usage


##### CLI

```
  Usage: guld [options] [command]

  Guld decentralized internet command line.

  Options:

    -V, --version     output the version number
    -u --user <name>  The user name to run as.
    -h, --help        output usage information

  Commands:

    user              Guld user management tools. Get, list, and check users of the guld group.
    env               Guld environment detection.
    git               Git tools and commands.
    mail              Guld mail is a signed, encrypted, and witnessed email system.
    keys              Cryptographic key storage and usage.
    pass              Encrypted password management comaptible with Standard Unix Password Store.
    ledger            Guld ledger.
    fs                Guld filesystem tools.
    help [cmd]        display help for [cmd]
```
