
//ie
require('html5shiv')
require('respond')
;(function() {
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		)
		document.querySelector('head').appendChild(msViewportStyle)
	}
})()

var $ = require('jquery')
require('bootstrap')
require('bootstrap-autohidingnavbar')
require('bootstrap/dist/css/bootstrap.css')
require('animate.css')
require('animate.css/animate.css')
require('wowjs')

require('./common/main.css')
require('./home/main.css')
require('./product-and-service/main.css')
require('./solution/main.css')
require('./partner/main.css')
require('./contact-us/main.css')
require('./join-us/main.css')
require('./about-us/main.css')
require('./news/main.css')

$(function() {
	// set title
	var title = $('#title, h1, h2, h3').first().text()
	$(document).attr('title', title)

	// auto hide navbar
	$('.navbar-fixed-top').autoHidingNavbar()

	// wow
	new WOW().init()
})