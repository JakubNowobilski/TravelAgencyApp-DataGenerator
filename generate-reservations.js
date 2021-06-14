const axios = require('axios');
const fs = require('fs')
const random = require('random')

function generateRandomReservations(n = 10){
    let reservations = []
    for(let i = 0; i < n; i++){
        reservations.push({
            date: new Date(2021, random.int(0, 11), random.int(2, 32)),
            status: 'n',
            priceSnapshot: random.int(5, 200) * 100,
            numberOfParticipants: random.int(0, 200)
        });
    }
    return reservations;
}

function postRandomParticipants(n){
    axios.post('http://localhost:8080/api/v1/reservations?id=someID', {...reservations[n]}).then(result => {
        if(n > 0)
            postRandomParticipants(n - 1)
    }).catch(err => {
        console.log(err)
    })
}

const reservations = generateRandomReservations();
console.log(reservations)
