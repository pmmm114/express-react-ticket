const connectToDatabase = require('../db');
const User = require('../user/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then');

module.exports.register = (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return connectToDatabase.connectToDatabase()
        .then(() => register(JSON.parse(event.body)))
        .then(session => ({
            statusCode: 200,
            body: JSON.stringify(session)
        }))
        .catch( err => ({
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: err.message
        }));
};

signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
}

checkIfInputIsValid = (eventBody) => {
    if(
        !(eventBody.password && eventBody.password.length >= 7)
    ) {
        return Promise.reject(new Error('Password error. Password needs to be longer than 8 characters : '+eventBody.password));
    }

    if(
        !(eventBody.UserId && eventBody.UserId.length > 5)
    ) {
        return Promise.reject(new Error('UserId error. UserId needs to longer than 5 characters : '+eventBody.UserId));
    }

    if(
        !(eventBody.email)
    ) {
        return Promise.reject(new Error('Email error. Email must have valid characters : '+eventBody.email));
    }

    return Promise.resolve();
}

register = (eventBody) => {
    return checkIfInputIsValid(eventBody)
        .then(() => User.findOne({ UserId: eventBody.UserId}))
        .then(user =>
            user
            ? Promise.reject(new Error('User with that email exists'))
            : bcrypt.hash(eventBody.password, 8)) // hash the password
        .then(hash => 
            User.create({UserId: eventBody.UserId, email: eventBody.email, password: hash, participant: eventBody.participant }))
        .then(user => ({ auth: true, token: signToken(user._id)})) // sign the token and send it back
}

module.exports.login = (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return connectToDatabase.connectToDatabase()
    .then(() => login(JSON.parse(event.body)))
    .then(session => ({
        statusCode: 200,
        body: JSON.stringify(session)
    }))
    .catch(err => ({
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain'},
        body: { stack: err.stack, message: err.message }
    }));
};

login = (eventBody) => {
    return User.findOne({ UserId: eventBody.UserId })
        .then(user =>
            !user
            ? Promise(new Error('User with that id does not exits.'))
            : comparePassword(eventBody.password, user.password, user._id))
        .then(token => ({ auth: true, token: token}));
}

comparePassword = (eventPassword, userPassword, userId) => {
    return bcrypt.compare(eventPassword, userPassword)
        .then(passwordIsValid => 
            !passwordIsValid
            ? Promise(new Error('The Credntials do not match.'))
            : signToken(userId));
}

module.exports.me = (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return connectToDatabase.connectToDatabase()
      .then(() =>
        me(event.requestContext.authorizer.principalId) // the decoded.id from the VerifyToken.auth will be passed along as the principalId under the authorizer
      )
      .then(session => ({
        statusCode: 200,
        body: JSON.stringify(session)
      }))
      .catch(err => ({
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: { stack: err.stack, message: err.message }
      }));
  };
  

me = (userId) => {
    return User.findById(userId, { password: 0 })
      .then(user =>
        !user
          ? Promise.reject('No user found.')
          : user
      )
      .catch(err => Promise.reject(new Error(err)));
  }