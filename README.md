# @mfe-frameworks/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mfe-frameworks/cli.svg)](https://npmjs.org/package/@mfe-frameworks/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@mfe-frameworks/cli.svg)](https://npmjs.org/package/@mfe-frameworks/cli)
[![License](https://img.shields.io/npm/l/@mfe-frameworks/cli.svg)](https://github.com/marcelovicentegc/microfrontend-framework/blob/master/package.json)

<!-- toc -->
* [@mfe-frameworks/cli](#mfe-frameworkscli)
* [Usage](#usage)
* [Commands](#commands)
* [Development](#development)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @mfe-frameworks/cli
$ mfe COMMAND
running command...
$ mfe (-v|--version|version)
@mfe-frameworks/cli/0.0.3 darwin-arm64 node-v16.13.0
$ mfe --help [COMMAND]
USAGE
  $ mfe COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`mfe create`](#mfe-create)
* [`mfe help [COMMAND]`](#mfe-help-command)
* [`mfe install [TENANT]`](#mfe-install-tenant)
* [`mfe publish`](#mfe-publish)

## `mfe create`

creates a new micro-frontend application

```
USAGE
  $ mfe create

OPTIONS
  --poc=nextjs-run-time-integration|nextjs-build-time-integration

EXAMPLE
  $ mfe create
```

_See code: [src/commands/create.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.3/src/commands/create.ts)_

## `mfe help [COMMAND]`

display help for mfe

```
USAGE
  $ mfe help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.13/src/commands/help.ts)_

## `mfe install [TENANT]`

installs a published micro-frontend application on a tenant

```
USAGE
  $ mfe install [TENANT]

ARGUMENTS
  TENANT  (glowing-fiesta|vigilant-octo-sniffle|redesigned-robot) [default: glowing-fiesta] output file

EXAMPLE
  $ mfe install
```

_See code: [src/commands/install.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.3/src/commands/install.ts)_

## `mfe publish`

publishes a patched version of the micro-frontend application

```
USAGE
  $ mfe publish

EXAMPLE
  $ mfe publish
```

_See code: [src/commands/publish.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.3/src/commands/publish.ts)_
<!-- commandsstop -->

# Development

- Clone this repo
- Clone the builder and the registry application
- Get your API keys for each of the services above
- Start the builder, and than start the registry
- Start playing with it
