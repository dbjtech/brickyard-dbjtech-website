# What
This repo is the source code of the [dbjtech official website](http://www.dbjtech.com)

# How
1. Download [brickyard](https://github.com/vincentngthu/brickyard), run

  ```bash
  npm i
  npm i gulp -g
  ```

1. Download this repo to brickyard/plugins

1. In the brickyard dir, run

  ```bash
  gulp build --program dbj-website
  ```

1. The target build files will located at

  ```bash
  brickyard/build-dbj-website/www
  ```

1. Move these files to any static web container and then access

# Debug
1. In the brickyard dir, run

  ```bash
  gulp debug --program dbj-website
  ```

1. open http://localhost:8080/
