import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
// Meteor.call('getIPAddresses');
});
Meteor.methods({
    'getIPAddresses'() {
    var ipAddresses = [];
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                ipAddresses.push(alias.address);
            }
        }
    }
    console.log("get it now ", ipAddresses);
    return ipAddresses;
}
});
