Template.hello.helpers({
    data: function(){
    var data = {};
    var lang = navigator.language;
    var ip = document.referrer;
    var os = navigator.userAgent;
    data = {ip: ip,
            os: os,
            lang: lang};
    console.log(data);
    return data;
    }
});
