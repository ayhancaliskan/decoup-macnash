odoo.define('mac_website.homepage', function (require) {
    'use strict';
    console.log("JS go");
    var Widget = require('web.Widget');
    var sAnimation = require('website.content.snippets.animation');

    sAnimation.registry.homepage = Widgetextend({
        selector: '#top',

        events: {
            'click .submit-test' : '_MyFunction',
        },

        start: function (){
            console.log('Test function start défault');
        },

        _MyFunction: function () {
            console.log('myFunction ok');
        }
    })
});