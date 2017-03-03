# brickyard-dbjtech-website [![Build Status](https://travis-ci.org/dbjtech/brickyard-dbjtech-website.svg?branch=master)](https://travis-ci.org/dbjtech/brickyard-dbjtech-website)

# What
This repo is the source code of the [dbjtech official website](http://www.dbjtech.com)

# How

1. Install brickyard-cli
  ```bash
  npm i -g brickyard-cli
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
