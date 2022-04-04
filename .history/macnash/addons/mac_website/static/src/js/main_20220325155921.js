odoo.define('mac_website.homepage', function (require) {
    'use strict';
    console.log("JS go");
    var publicWidget = require('web.public.widget');
    var sAnimation = require('website.content.snippets.animation');

    sAnimation.registry.homepage = publicWidget.Widget.extend({
        selector: '#top',

        events: {
            'click .submit-test' : '_MyFunction',
        },

        start: function (){
            console.log('Test au démarrage');
        },

        _MyFunction: function () {
            console.log('myFunction compris');
        }
    })
});