subspace-cli
=================

Small subspace cli tool based on @subspace/subspace library

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/subspace-cli.svg)](https://npmjs.org/package/subspace-cli)
[![Downloads/week](https://img.shields.io/npm/dw/subspace-cli.svg)](https://npmjs.org/package/subspace-cli)
[![License](https://img.shields.io/npm/l/subspace-cli.svg)](https://github.com/mariano-aguero/subspace-cli/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g subspace-cli
$ subspace-cli COMMAND
running command...
$ subspace-cli (--version)
subspace-cli/0.0.0 darwin-arm64 node-v16.18.0
$ subspace-cli --help [COMMAND]
USAGE
  $ subspace-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`subspace-cli storage:get --objectId OBJECT_ID`](#subspace-cli-storage-get)
* [`subspace-cli storage:put --file FILENAME`](#subspace-cli-storage-push)
* [`subspace-cli help [COMMAND]`](#subspace-cli-help-command)
* [`subspace-cli plugins`](#subspace-cli-plugins)
* [`subspace-cli plugins:install PLUGIN...`](#subspace-cli-pluginsinstall-plugin)
* [`subspace-cli plugins:inspect PLUGIN...`](#subspace-cli-pluginsinspect-plugin)
* [`subspace-cli plugins:install PLUGIN...`](#subspace-cli-pluginsinstall-plugin-1)
* [`subspace-cli plugins:link PLUGIN`](#subspace-cli-pluginslink-plugin)
* [`subspace-cli plugins:uninstall PLUGIN...`](#subspace-cli-pluginsuninstall-plugin)
* [`subspace-cli plugins:uninstall PLUGIN...`](#subspace-cli-pluginsuninstall-plugin-1)
* [`subspace-cli plugins:uninstall PLUGIN...`](#subspace-cli-pluginsuninstall-plugin-2)
* [`subspace-cli plugins update`](#subspace-cli-plugins-update)

## `subspace-cli storage:get --objectId OBJECT_ID`

Receives an objectId calling findObject to return the Object as Uint8Array.

```
USAGE
  $ subspace-cli storage get [--mnemonic <value>] [--nodeWsProvider <value>] [--farmerWsProvider <value>] [--objectId <value>]

FLAGS
  --farmerWsProvider=<value>
  --mnemonic=<value>
  --nodeWsProvider=<value>
  --objectId=<value>

DESCRIPTION
  Receives an objectId calling findObject to return the Object as Uint8Array.

EXAMPLES
  $ subspace-cli storage get --help

  $ subspace-cli storage get --objectId bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8
```

_See code: [dist/commands/hello/index.ts](https://github.com/mariano-aguero/subspace-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `subspace-cli storage:put --file FILENAME`

Receives an Object as Uint8Array, it create and submit a signed put transaction and return an objectId.

```
USAGE
  $ subspace-cli storage put [--mnemonic <value>] [--nodeWsProvider <value>] [--farmerWsProvider <value>] [--file <value>]

FLAGS
  --farmerWsProvider=<value>
  --file=<value>
  --mnemonic=<value>
  --nodeWsProvider=<value>

DESCRIPTION
  Receives an Object as Uint8Array, it create and submit a signed put transaction and return an objectId.

EXAMPLES
  $ subspace-cli storage put --help

  $ subspace-cli storage put --file ./example.jpeg
```

## `subspace-cli help [COMMAND]`

Display help for subspace-cli.

```
USAGE
  $ subspace-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for subspace-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_

## `subspace-cli plugins`

List installed plugins.

```
USAGE
  $ subspace-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ subspace-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.5/src/commands/plugins/index.ts)_

## `subspace-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ subspace-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ subspace-cli plugins add

EXAMPLES
  $ subspace-cli plugins:install myplugin 

  $ subspace-cli plugins:install https://github.com/someuser/someplugin

  $ subspace-cli plugins:install someuser/someplugin
```

## `subspace-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ subspace-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ subspace-cli plugins:inspect myplugin
```

## `subspace-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ subspace-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ subspace-cli plugins add

EXAMPLES
  $ subspace-cli plugins:install myplugin 

  $ subspace-cli plugins:install https://github.com/someuser/someplugin

  $ subspace-cli plugins:install someuser/someplugin
```

## `subspace-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ subspace-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ subspace-cli plugins:link myplugin
```

## `subspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ subspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ subspace-cli plugins unlink
  $ subspace-cli plugins remove
```

## `subspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ subspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ subspace-cli plugins unlink
  $ subspace-cli plugins remove
```

## `subspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ subspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ subspace-cli plugins unlink
  $ subspace-cli plugins remove
```

## `subspace-cli plugins update`

Update installed plugins.

```
USAGE
  $ subspace-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
