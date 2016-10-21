# Angular(2) Seed Hybrid Admin (Template)

[![Join the chat at https://gitter.im/angular-seed-hybrid/Lobby](https://badges.gitter.im/angular-seed-hybrid/Lobby.svg)](https://gitter.im/angular-seed-hybrid/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/jvitor83/angular-seed-hybrid-admin.svg)](https://david-dm.org/jvitor83/angular-seed-hybrid-admin)
[![devDependency Status](https://david-dm.org/jvitor83/angular-seed-hybrid-admin/dev-status.svg)](https://david-dm.org/jvitor83/angular-seed-hybrid-admin#info=devDependencies)
[![DONATE](https://pledgie.com/campaigns/32766.png?skin_name=chrome)](https://pledgie.com/campaigns/32766)


## Description

**Multiplatform** Angular 2 project (_Web_, _Mobile_ and _Desktop_) with a sample **admin template** applied.

> Based _(forked)_ on [https://github.com/jvitor83/angular-seed-hybrid](https://github.com/jvitor83/angular-seed-hybrid)  
  

## Features

- Web
- Hybrid Mobile (Cordova)
- Desktop (Cordova)

## TODOs

- [x] Test Web
- [x] Test Browser (Cordova)
- [x] Test Windows (Cordova)
- [x] Test Android (Cordova)
- [ ] Test iOS (Cordova)
- [ ] Test OSx (Cordova)
- [ ] Test Ubuntu (Cordova)
- [x] Test dev build
- [ ] Watch dev build for Cordova
- [x] Test prod build
- [ ] Test others dev environment (Non Windows)
- [ ] Add Ionic2

## Sample

With Template SB Admin
[https://github.com/jvitor83/angular-seed-hybrid-admin](https://github.com/jvitor83/angular-seed-hybrid-admin)


## Requirements

- **GIT**: Have installed or Install GIT: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- **NODE**: Have installed or Install NODE (5.XX): [https://nodejs.org/en/download/releases/](https://nodejs.org/en/download/releases/) 


## Starting

```bash
# Clone this repository
git clone https://github.com/jvitor83/angular-seed-hybrid-admin
cd angular-seed-hybrid-admin

# Install global dependencies
npm install --global cordova typescript ts-node gulp rimraf browser-sync

# Install the project's dependencies
npm install
```

> At **[some cases](https://software.intel.com/en-us/xdk/docs/why-use-crosswalk-for-android-builds)** is good to consider using **[Crosswalk](https://crosswalk-project.org/)** for better compatibility and performance
> ```bash
> # At root folder
> cd src/cordova
> cordova plugin add cordova-plugin-crosswalk-webview --save
> ```


## Running

| PLATFORM       | GUIDE (Tools, Sdk, etc)                                                                       | INSTALL                   | RUN                     |
|----------------|-----------------------------------------------------------------------------------------------|---------------------------|-------------------------|
| Web            |                                                                                               |                           | `npm run start`         |
| Android        | [Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) | `npm run install.android` | `npm run start.android` |
| IOS            | [Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)     | `npm run install.ios`     | `npm run start.ios`     |
| Windows        | [Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html)    | `npm run install.windows` | `npm run start.windows` |
| OSx            | [Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/osx/index.html)     | `npm run install.osx`     | `npm run start.osx`     |
| Ubuntu (Linux) | [Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/ubuntu/index.html)  | `npm run install.ubuntu`  | `npm run start.ubuntu`  |
| Browser        |                                                                                               | `npm run install.browser` | `npm run start.browser` |


## Structure

```
├── src                        
│   ├── client                      <- source code of the application
│   │   ├── app                     <- angular components
│   │   ├── assets                  
│   │   ├── css                     
│   └── cordova                     <- cordova project
```

> The `src/cordova/app` directory contains two [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link), one to `src/client/app` and another to `src/client/assets`, this allow to reuse the same files from within those folders from the **web** build at the **cordova** build. 

# Change Log

You can follow the [Angular change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
