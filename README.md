Create bot in the [dev.botframework.com](dev.botframework.com), get appId and appPassword

Create script in the [broscript.ru](broscript.ru), get userKey and scriptKey

```
heroku login
heroku create
heroku config:set BROSCRIPT_USER_KEY=... BROSCRIPT_SCRIPT_KEY=... MS_APP_ID=... MS_APP_PASSWORD=...
//username - blank, password - heroku auth:token
git push heroku master
//check working
heroku ps:scale web=1
//open in the browser
heroku open
```