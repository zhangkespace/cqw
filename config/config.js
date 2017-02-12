define(function(require, exports, module) {
    require("../less/globle.css");
    require("../js/bower_components/jquery/dist/jquery.js");
    var Index = {
        init: function() {
            var header = require("../js/header.js");
            var home = require("../js/home.js");
            home.init();
            
        }




    }
    module.exports = Index;
})
