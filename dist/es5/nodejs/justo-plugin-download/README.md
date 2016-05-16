[![NPM version](http://img.shields.io/npm/v/justo-plugin-download.svg)](https://www.npmjs.org/package/justo-plugin-download)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-download.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-download)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-download.svg)](https://david-dm.org/justojsp/justo-plugin-download)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-download/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-download#info=devDependencies)

Plugin to download files.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-download
```

## Use

To download:

```
download(opts, config)
```

The `config` properties:

- `src` (string). The URL.
- `dst` (string). Destination dir.

Example:

```
const download = require("justo-plugin-download");

download("Download MongoDB", {
  src: "https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-3.2.4-signed.msi",
  dst: "C:\Users\me\Downloads\"
});
```

The downloaded file will be `C:\Users\me\Downloads\mongodb-win32-x86_64-3.2.4-signed.msi`.
