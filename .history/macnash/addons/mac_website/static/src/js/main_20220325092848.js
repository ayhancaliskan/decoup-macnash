odoo.define('', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    var sAnimation = require('website.content.snippets.animation');

    sAnimation.registry.mac_main = publicWidget.widget.extend({
        selector: '',

        events: {
            'change' : '_MyFunction',
        },

        start: function (){
            console.log('Teeeest');
        }

        _MyFunction: function () {}
    })
});