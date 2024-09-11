# Installation Guide

Below are detailed steps to install various pre-requisites for local development of this template's figma plugin setup.

_**Pre-requisites**_: [Cloning](#clone-repository) | [nvm](#install-nvm) | [pnpm](#install-pnpm)

_**Development**_: [Install Dependencies](#install-dependencies) | [Start Build](#start-building) | [Figma](#setup-figma)

![Demonstration of running your local figma plugin with the Figma Desktop App](./assets/figma-installation.gif)

____

## Clone Repository

```bash
git clone https://github.com/Nicholas-Nguyen8742/leafy-maps.git

```

```bash
cd leafy-maps
```

## Install nvm

Node Version Manager documentation can be found [here](https://github.com/nvm-sh/nvm) to enable management of multiple node.js versions whether it be for work or for professional development.

1. Install / Update using cURL or Wget:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

2. Run the following command to load nvm.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. Install node@20.9.0 with nvm

```bash
nvm install 20.9.0
```

## Install pnpm

pnpm (performant npm) is a package manager that is a package manager tool that allows you to track all of your dependencies that has multiple package. More information can be found [here](https://pnpm.io/)

1. Install pnpm via npm

> Ensure `nvm use 20.9.0` is run before installing pnpm via npm

```bash
npm i -g pnpm@8.15.6
```

> More installation options for pnpm can be found [here](https://pnpm.io/installation#using-a-standalone-script)

## Install Dependencies

```bash
pnpm install
```

## Start Building
```bash
pnpm build

pnpm dev
```

## Setup Figma

Installation steps are pulled from figma's [Plugin Quickstart Guide](https://www.figma.com/plugin-docs/plugin-quickstart-guide/)

### Download the Figma Desktop App

The [Figma desktop app](https://www.figma.com/downloads/): Plugin development and testing requires the Figma desktop app. Figma will need to read your plugin code saved as a local file. You can download it from the [Figma downloads page](https://www.figma.com/downloads/). If you already have the desktop app installed, make sure you’re running the latest version.

### Create a new plugin

1. Log into the desktop app and create a new design file.
1. From the menu, navigate to Plugins > Development, then select New plugin.
1. From the Create a plugin modal, select Figma design and give your plugin a name.
1. Select Custom UI
1. Click Save as to save it anywhere on your disk
