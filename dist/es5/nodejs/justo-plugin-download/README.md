[![Build Status](https://travis-ci.org/justojsp/justo-plugin-download.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-download)

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
