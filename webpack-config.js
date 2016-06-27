'use strict'

const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let htmls = glob.sync('./**/*.body.html', { cwd: __dirname })
let config = {
	output: {
		// filename: 'main.[hash:6].js',
		filename: 'main.js',
	},
	plugins: [],
}

function create_config(dst, opt) {
	let rs = opt || {}
	rs.filename = dst
	rs.template = `${__dirname}/common/template.html`
	rs.inject = 'head'
	rs.favicon = `${__dirname}/common/img/favicon.ico`
	return rs
}

for (let html_path of htmls) {
	let basename = path.basename(html_path, '.body.html')
	let dirname = path.dirname(html_path).substring(2)
	console.debug('building html', html_path)
	let conf = create_config(`${basename}.html`, { path: `${dirname}/${basename}` })
	config.plugins.push(new HtmlWebpackPlugin(conf))
}

module.exports = config
