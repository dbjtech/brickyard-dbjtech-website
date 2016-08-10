# What
This repo is the source code of the [dbjtech official website](http://www.dbjtech.com)

# How
1. Download [brickyard](https://github.com/vincentngthu/brickyard)

1. Download this repo to brickyard_module/

1. Install brickyard-cli
  ```bash
  npm i -g brickyard-cli
  ```

1. In the brickyard dir, run

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
  brickyard build dbjtech-website --debug
  ```

1. open http://localhost:8080/
