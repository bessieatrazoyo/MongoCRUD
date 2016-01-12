var port = 1337;

module.exports = {
  port: port,
  db: 'mongodb://localhost/todos',
  facebook: {
    clientID: '1685432595056448',
    clientSecret:  '6c8250091dedf8fd2746ef08c2061ede',
    callbackURL: 'http://localhost:'+port+'/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'aJr90HxeremMSjBiqG9dU3D0E',
    clientSecret: 'Dj2HCibSBADb44unqDkADCgN97krSPhErzXWzeBTTOdY9MOump',
    callbackURL: 'http://localhost:'+port+'/oauth/twitter/callback'
  },
  google: {
    clientID: '345282584739-e1g9h7r7kvf7gfioo5ibsgq7qqj7vh5r.apps.googleusercontent.com',
    clientSecret: 'VBUOKBd5S6QodyQg-43hQIqM',
    callbackURL: 'http://localhost:'+port+'/oauth/google/callback'
  }
};

