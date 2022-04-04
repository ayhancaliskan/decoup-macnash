odoo.define('mac_website.mac', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    var sAnimation = require('website.content.snippets.animation');

    sAnimation.registry.mac_main = publicWidget.widget.extend({
        selector: '.wrapwrap',

        events: {
            'change' : '_MyFunction',
        },

        start: function (){
            console.log('Teeeest');
        },

        _MyFunction: function () {
            console.log('myFunction');
        }
    })
});