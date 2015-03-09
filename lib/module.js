#! /usr/bin/env node
/**
 * Created by Anis on 09/03/2015.
 */

var fs = require('fs');

module.exports = function(rule) {

    fs.readFile('./template/RX.module.js', 'utf8', function(e, s) {
        s = s.replace("{{module}}", "306");
        fs.mkdir("modules")
        fs.mkdir("modules/306")
        fs.writeFile("modules/306/R306.module.js", s);
    });

}