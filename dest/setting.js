
			const config = require('./config.js')
			const modules = [
	{
		"name": "buildtask-install",
		"description": "安装npm和bower依赖",
		"dependencies": {
			"brickyard-cli": "^4.2.0"
		},
		"devDependencies": {
			"bower": "^1.8.0",
			"fs-extra": "^3.0.1",
			"gulp-json-editor": "^2.2.1",
			"gulp-load-plugins": "^1.2.4",
			"lodash": "^4.6.1"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/install",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\install\\index.js",
		"mainDest": "buildtask-install\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-build-webpage",
		"description": "网页编译基础流程",
		"devDependencies": {
			"merge-stream": "^1.0.1",
			"del": "^2.2.2",
			"gulp-changed": "^1.3.0",
			"gulp-ng-annotate": "^1.1.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/build-webpage",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\build-webpage\\index.js",
		"mainDest": "buildtask-build-webpage\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-watch",
		"description": "监控文件改动，热启动程序",
		"devDependencies": {
			"gulp-livereload": "^3.8.0",
			"chokidar": "^1.6.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/watch",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\watch\\index.js",
		"mainDest": "buildtask-watch\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-babel",
		"description": "webpack程序的babel编译流程",
		"devDependencies": {
			"babel-core": "^6.22.1",
			"babel-loader": "^6.2.10",
			"babel-polyfill": "^6.22.0",
			"babel-preset-env": "^1.5.1",
			"babel-preset-stage-2": "^6.22.0",
			"lodash": "^4.17.4"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/babel",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\babel\\index.js",
		"mainDest": "buildtask-webpack-babel\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-build",
		"description": "webpack程序的基础编译流程",
		"devDependencies": {
			"fs-extra": "^3.0.1",
			"gulp-data": "^1.2.0",
			"gulp-template": "^3.0.0",
			"lodash": "^4.6.1",
			"webpack": "^1.13.1"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/build",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\build\\index.js",
		"mainDest": "buildtask-webpack-build\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-common-shim",
		"description": "webpack程序的特殊依赖库路径修正",
		"devDependencies": {
			"lodash": "^4.6.1",
			"exports-loader": "^0.6.3",
			"expose-loader": "^0.7.1",
			"imports-loader": "^0.6.5"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/common-shim",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\common-shim\\index.js",
		"mainDest": "buildtask-webpack-common-shim\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-css",
		"description": "webpack程序的css加载",
		"devDependencies": {
			"css-loader": "^0.23.1",
			"do-nothing-loader": "^1.0.0",
			"extract-text-webpack-plugin": "^1.0.1",
			"lodash": "^4.6.1",
			"style-loader": "^0.13.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/css",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\css\\index.js",
		"mainDest": "buildtask-webpack-css\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-json",
		"description": "webpack程序的json加载",
		"devDependencies": {
			"lodash": "^4.6.1",
			"json-loader": "^0.5.4"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/json",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\json\\index.js",
		"mainDest": "buildtask-webpack-json\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-ng-annotate",
		"description": "webpack程序的angular annotate修正",
		"devDependencies": {
			"lodash": "^4.6.1",
			"ng-annotate-loader": "^0.1.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/ng-annotate",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\ng-annotate\\index.js",
		"mainDest": "buildtask-webpack-ng-annotate\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-ng-cache",
		"description": "webpack程序的angular html模板加载",
		"devDependencies": {
			"lodash": "^4.6.1",
			"ng-cache-loader": "0.0.15"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/ng-cache",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\ng-cache\\index.js",
		"mainDest": "buildtask-webpack-ng-cache\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-resource",
		"description": "webpack程序的静态资源加载",
		"devDependencies": {
			"file-loader": "^0.8.5",
			"lodash": "^4.6.1",
			"url-loader": "^0.5.7"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/resource",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\resource\\index.js",
		"mainDest": "buildtask-webpack-resource\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-scss",
		"description": "webpack程序的scss编译",
		"devDependencies": {
			"css-loader": "^0.23.1",
			"extract-text-webpack-plugin": "^1.0.1",
			"lodash": "^4.6.1",
			"node-sass": "^4.5.3",
			"resolve-url-loader": "^1.4.3",
			"sass-loader": "^3.1.2",
			"style-loader": "^0.13.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/scss",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\scss\\index.js",
		"mainDest": "buildtask-webpack-scss\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-split-vendor",
		"description": "split vendor js from frontend main.js",
		"dependencies": {
			"webpack": "^1.13.1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/split-vendor",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\split-vendor\\index.js",
		"mainDest": "buildtask-webpack-split-vendor\\index.js",
		"type": "buildtask"
	},
	{
		"name": "webpack-dev-server",
		"description": "buildtask for webpack-dev-server",
		"dependencies": {
			"http-proxy-middleware": "^0.17.0",
			"morgan": "^1.7.0",
			"webpack-dev-server": "^1.14.1"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "C:/Users/squal/AppData/Roaming/npm/node_modules/brickyard-cli/brickyard_modules/framework/webserver/webpack-dev-server",
		"main": "index.js",
		"mainSrc": "C:\\Users\\squal\\AppData\\Roaming\\npm\\node_modules\\brickyard-cli\\brickyard_modules\\framework\\webserver\\webpack-dev-server\\index.js",
		"mainDest": "webpack-dev-server\\index.js",
		"type": "buildtask"
	}
]
			module.exports = { config, modules, }
		