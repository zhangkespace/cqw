define(function(require, exports, module) {
    var header = require("../view/header.js");
    $("#header").html(header);
    require("../less/header.css");
   
    
    var timer = null;
    $('.home-container .shop,.home-container .txt').hover(function() {
        clearTimeout(timer);
        $('.home-container .shop a').css({
            "color": "#b54f4a"
        }).parent('.shop').css('border-color', '#b54f4a');
        $('.home-container .txt').slideDown();
        $('.home-container .shop a .icon').css('transform', 'rotateZ(90deg)')
    }, function() {
        timer = setTimeout(function() {
            $('.home-container .txt').slideUp();
            $('.home-container .shop a').css('color', '#999').parent('.shop').css('border-color', '#999');
            $('.home-container .shop a .icon').css('transform', 'rotateZ(-90deg)')
        }, 500)
    })

})
