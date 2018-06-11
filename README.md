# win-lnk-parser
Simple package to read some metadata info from .lnk files (windows shortcuts) with support for special characters

## Pre-requisites
This package only works on Windows and you must have the following apps:
```
$ chcp /?
$ cscript /?
```

## Usage
``` js
const lnkParser = require('win-lnk-parser')
const fullPath = "c:\\...\\...\\example.lnk"
const {
    targetPath
    windowStyle
    hotKey
    iconLocation
    description
    workingDirectory
} = lnkParser(fullPath, [codePage=850])
```
 - fullPath - absolute path to .lnk file
 - codePage - defaults to 850 (see [here](https://en.wikipedia.org/wiki/Code_page) for more information)

## Author
José Varela (joselcvarela//at//gmail.com)
