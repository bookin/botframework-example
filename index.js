var restify = require('restify');
var builder = require('botbuilder');
var broscript = require('broscript');

//BROSCRIPT_USER_KEY and BROSCRIPT_SCRIPT_KEY heroku variables https://devcenter.heroku.com/articles/config-vars
broscript.config.userKey = process.env.BROSCRIPT_USER_KEY;
broscript.config.scriptKey = process.env.BROSCRIPT_SCRIPT_KEY;

//var controller = broscript.APIController;

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create bot and add dialogs
//MS_APP_ID and MS_APP_PASSWORD heroku variables https://devcenter.heroku.com/articles/config-vars
var connector = new builder.ChatConnector({
    appId: process.env.MS_APP_ID,
    appPassword: process.env.MS_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/', connector.listen());


bot.dialog('/', function (session, args, next) {
    var options = {
        "msg": session.message.text, //msg
        "chatId":session.message.user.id, //chatId
        "contact":null, //contact
        "external":null, //external
        "stopIsNull":null, //stopIsNull
        "repeatIsNull":null //repeatIsNull
    };
    broscript.api.answers(options, function(error, response, context){ //callback
        if(error !== null || response == null){
            //send error
        }else{
            session.send(response.answer);
        }
    });
});
