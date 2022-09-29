//主页字体动效
var load_js = document.getElementsByClassName("load_js")[0];
var o = 0;
var jsq = setInterval(function(){
        o++;
        console.log(o);
        if(o%2 == 0){
            load_js.style.top = "80vh";
            console.log("down");
        }else{
            load_js.style.top = "81vh";
            console.log("up");
        }
},500)
//主页面点击事件
var load = document.getElementsByClassName("load")[0];
load.onclick = function(){
    var i = 0;
    var jsq = setInterval(function (){
        if(i>=784){
            clearInterval(jsq);
        }else{
            i+=10;
            window.scroll(0,i);
        }
    },3.125)
}
//b站首页跳转悬浮or点击效果
var bilbil = document.getElementsByClassName("bilbil")[0];
var bil_img = document.getElementsByClassName("bil_image")[0];
var bil_js = document.getElementsByClassName("bil_js")[0];
bilbil.onmouseover = function(){
    bil_img.style.backgroundSize = "110% 110%";
    bil_js.style.color = "#999999";
    console.log("qwq");
}
bilbil.onmouseleave = function(){
    bil_img.style.backgroundSize = "100% 100%";
    bil_js.style.color = "#020e1a";
}
bilbil.onclick = function(){
    window.location = 'https://space.bilibili.com/670258743?spm_id_from=333.1007.0.0'
}
//