const connectToDatabase = require('../db');
const User = require('./User');

module.exports.getUsers = (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return connectToDatabase.connectToDatabase()
    .then(getUser)
    .then(users => ({
        statusCode: 200,
        body: JSON.stringify(users)
    }))
    .catch(err => ({
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ message: err.message })
    }));
};

getUser = () => {
    return User.find({})
        .then(users => users)
        .catch(err => Promise.reject(new Error(err)));
}