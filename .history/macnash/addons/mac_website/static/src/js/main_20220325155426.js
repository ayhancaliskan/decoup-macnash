odoo.define('mac_website.homepage', function (require) {
    'use strict';
LOG
    var publicWidget = require('web.public.widget');
    var sAnimation = require('website.content.snippets.animation');

    sAnimation.registry.mac_main = publicWidget.Widget.extend({
        selector: '.wrapwrap',

        events: {
            'click .submit-test' : '_MyFunction',
        },

        start: function (){
            console.log('Teeeest');
        },

        _MyFunction: function () {
            console.log('myFunction');
        }
    })
});