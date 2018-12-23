import axios from 'axios';

export const getUsers = () => axios.get('http://211.222.233.157:3000/api/Concert');

export const createReservation = ({ticket, newOwner}) => axios.post('http://211.222.233.157:3000/api/tradeTicket', {
    "$class": "org.example.ticket.tradeTicket",
    "ticket": ticket,
    "newOwner": newOwner
  }
).then( response => {console.log(response)}).catch(response => {console.log(response)});

export const getToken = ({id, pw}) => axios.post('https://97xfsyc75j.execute-api.us-east-1.amazonaws.com/dev/login', {
    "UserId": id,
    "password": pw
}).catch(response => {console.log(response)});

export const getMe = (token) => axios.get('https://97xfsyc75j.execute-api.us-east-1.amazonaws.com/dev/me',{
    headers: { Authorization: token }
});

export const getMyTicket = (owner) => axios.get('http://211.222.233.157:3000/api/Ticket?filter=%7B%22where%22%20%3A%20%7B%22owner%22%3A%22resource%3Aorg.example.ticket.User%23'+owner+'%22%7D%7D').then(
    response => {console.log(response)}
);