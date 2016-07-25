import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.hello.helpers({
    data: function(){
    var data = {};
    var lang = navigator.language;
    var ip;
Meteor.call("getIPAddresses", function(error, result){
      if(error){
        console.log(error.reason);
        return result;
    }
    Session.set("ip", result);
    //ip = result;
  });
  ip = Session.get("ip");
    var os = navigator.userAgent;
    data = {ip: ip,
            os: os,
            lang: lang};
            console.log(data);

    return data;
    }
});
