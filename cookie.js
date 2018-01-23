//设置cookie
function setCookie(key, value, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();//到期时间
    document.cookie = key + '=' + value + '; ' + expires;
}

//清除cookie
function clearAllCookie() {
    const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (let i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
    }
}

//获取
function getCookie(name) {
    const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr) console.log(arr[2]);
    return null;
}

//清缓存
$.ajax({
    url: 'www.haorooms.com',
    dataType: 'json',
    data: {},
    ifModified: true,
    cache: false,
    beforeSend: function (xmlHttp) {
        xmlHttp.setRequestHeader('If-Modified-Since', '0');
        xmlHttp.setRequestHeader('Cache-Control', 'no-cache');
    },
    success: function (response) {
        /*todo*/
    },
    async: false
});

// URL 参数后加上 "?ran=" + Math.random();
// URL 参数后加上 "?times=" + new Date().getTime();
