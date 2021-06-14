const axios = require('axios');
const fs = require('fs')
const random = require('random')

function generateRandomParticipants(n = 10){
    let participants = []
    let firstNames = fs.readFileSync('./participant/firstNames.txt', 'utf8')
    let lastNames = fs.readFileSync('./participant/lastNames.txt', 'utf8')
    firstNames = firstNames.split('\n')
    firstNames.pop();
    lastNames = lastNames.split('\n')
    lastNames.pop();
    for(let i = 0; i < n; i++){
        participants.push({
            firstName: firstNames[random.int(0, firstNames.length - 1)],
            lastName: lastNames[random.int(0, lastNames.length - 1)],
            birthDate: new Date(random.int(1900, 2020), random.int(0, 11), random.int(0, 32))
        });
    }
    return participants;
}

function postRandomParticipants(n){
    axios.post('http://localhost:8080/api/v1/participants?id=someID', {...participants[n]}).then(result => {
        if(n > 0)
            postRandomParticipants(n - 1)
    }).catch(err => {
        console.log(err)
    })
}

const participants = generateRandomParticipants();
console.log(participants)
