define(function(require, exports, module){return function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="news-box1"><div class="title clear"><a href="#">茶资讯</a><a href="#">更多>></a></div><ul>';for(var i = 0; i < data.teaNews.length; i++){;__p += '<li><a href="#"><span>' +((__t = (i+1)) == null ? '' : __t) +'</span>' +((__t = (data.teaNews[i])) == null ? '' : __t) +'</a><div class="detail"><img src="' +((__t = (data.newsBox1Src[i])) == null ? '' : __t) +'" alt=""><div class="txt"><p>' +((__t = (data.newsBox1Detail[i])) == null ? '' : __t) +'</p></div></div></li>';};__p += '</ul></div><div class="news-box2"><div class="title clear"><span>热评排行</span><div class="indicator"><span class="bgc"></span><span></span><span></span></div></div><div class="content"><div class="box clear">';for(var k = 0 ; k < data.newsBox2Src.length; k++){;__p += '<div class="cell"><a href="#"><img src="' +((__t = (data.newsBox2Src[k])) == null ? '' : __t) +'" alt=""></a><div class="txt"><p class="name">' +((__t = (data.newsBox2Charge[k])) == null ? '' : __t) +'</p><div class="charge"><span class="score">评分 :</span>';for(var p = 0; p < data.newsBox2ChargeNum[k];p++){;__p += '<span class="star"></span>';};__p += '</div><p class="charge-txt">' +((__t = (data.newsBox2ChargeTxt[k])) == null ? '' : __t) +'</p></div></div>';};__p += '</div><div class="left"><div class="left-box"><span class="iconfont">&#xe605;</span><span class="iconfont">&#xe605;</span></div></div><div class="right"><div class="right-box"><span class="iconfont">&#xe61e;</span><span class="iconfont">&#xe61e;</span></div></div></div></div><div class="news-box3"></div>';}return __p}});