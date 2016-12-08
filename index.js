var restify = require('restify');
//var express = require('express');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: "3b34df50-d516-4b7c-ab00-cf08afe88d0a",
    appPassword: "bi9HvaVx0TvK5uYFpwoHpWN"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


bot.dialog('/', function (session) {
    session.send('Hello World');
});

/*
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});*/
