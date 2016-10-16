# Angular(2) Seed Hybrid

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/jvitor83/angular-seed-hybrid.svg)](https://david-dm.org/jvitor83/angular-seed-hybrid)
[![devDependency Status](https://david-dm.org/jvitor83/angular-seed-hybrid/dev-status.svg)](https://david-dm.org/jvitor83/angular-seed-hybrid#info=devDependencies)

## Description

**Multiplatform** Angular 2 project (_Web_, _Mobile_ and _Desktop_).

> Based _(forked)_ on [https://github.com/mgechev/angular-seed](https://github.com/mgechev/angular-seed)  
> Inspired on [https://github.com/NathanWalker/angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)
> > Check those links for **more details** about the seed.  

## Features

- Web
- Hybrid Mobile (Cordova)
- Desktop (Cordova)

## TODOs

- [x] Test Android (Cordova)
- [ ] Test iOS (Cordova)
- [ ] Test Windows (Cordova)
- [ ] Test OSx (Cordova)
- [ ] Test Ubuntu (Cordova)
- [ ] Test Browser?!? (Cordova)
- [x] Test dev build
- [ ] Watch dev build for Cordova
- [x] Test prod build
- [ ] Test others dev environment (Non Windows)
- [ ] Add Ionic2

## Getting started

```bash
git clone https://github.com/jvitor83/angular-seed-hybrid
cd angular-seed-hybrid

# install cordova globally
npm install -g cordova

# install the project's dependencies
npm install
```

### Web

```bash
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

### Mobile (Hybrid)

#### Android
> [http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)

##### Requirements
```bash
# Go to the cordova directory
cd src/cordova
# Install the platform
cordova platform add android --save
```

##### Starting
```bash
# At root directory
npm start.android
```

#### iOS _(Not tested)_
> [http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

##### Requirements
```bash
# Go to the cordova directory
cd src/cordova
# Install the platform
cordova platform add ios --save
```

##### Starting
```bash
# At root directory
npm start.ios
```

### Desktop/Mobile

#### Windows _(Not tested)_
> [http://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html](http://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html)

##### Requirements
```bash
# Go to the cordova directory
cd src/cordova
# Install the platform
cordova platform add windows --save
```

##### Starting
```bash
# At root directory
npm start.windows
```

### Desktop

#### OS X _(Not tested)_
> [http://cordova.apache.org/docs/en/latest/guide/platforms/osx/index.html](http://cordova.apache.org/docs/en/latest/guide/platforms/osx/index.html)

##### Requirements
```bash
# Go to the cordova directory
cd src/cordova
# Install the platform
cordova platform add osx --save
```

##### Starting
```bash
# At root directory
npm start.osx
```

#### Linux (Ubuntu) _(Not tested)_
> [http://cordova.apache.org/docs/en/latest/guide/platforms/ubuntu/index.html](http://cordova.apache.org/docs/en/latest/guide/platforms/ubuntu/index.html)

##### Requirements
```bash
# Go to the cordova directory
cd src/cordova
# Install the platform
cordova platform add ubuntu --save
```

##### Starting
```bash
# At root directory
npm start.linux
```


# Change Log

You can follow the [Angular change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
