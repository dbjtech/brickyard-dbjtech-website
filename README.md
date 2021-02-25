# brickyard-dbjtech-website [![Build Status](https://travis-ci.org/dbjtech/brickyard-dbjtech-website.svg?branch=master)](https://travis-ci.org/dbjtech/brickyard-dbjtech-website)

# What

This repo is the source code of the [dbjtech official website](http://www.dbjtech.com)

# How

1. Using Node.js v10 is recommended. You can manage your node version by [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).
```bash
nvm install 10
nvm use 10
```

1. Install brickyard-cli < 6
```bash
npm i -g brickyard-cli@5.1.3
```

1. In the repo dir, run
```bash
brickyard build dbjtech-website
```

1. The target build files will located at
```bash
output/www
```

1. Move these files to any static web container and then access

# Debug

1. In the brickyard dir, run
```bash
brickyard build dbjtech-website --watch
```

1. open http://localhost:8080/

WARN: Debugging output files are CACHED in memory that not written on your disk.
If you want to save your building output, please run `brickyard build dbjtech-website`.

# Run with Docker

```
docker run -p 8080:80 dbjtech/brickyard-dbjtech-website
```
