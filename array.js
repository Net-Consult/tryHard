let hostels = [
    {
        id: 1,
        name: 'hotel rose',
        roomNumbers: 10,
        pool: true,
        rooms: [
            {
                roomName: 'suite de luxe',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite nuptiale',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite budget',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite budget',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite de luxe',
                size: 2,
                id: 7
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 8
            },
            {
                roomName: 'suite de luxe',
                size: 3,
                id: 9
            },
            {
                roomName: 'suite présidentielle',
                size: 5,
                id: 10
            }
        ]

    },
    {
        id: 2,
        name: 'hotel ocean',
        roomNumbers: 15,
        pool: false,
        rooms: [
            {
                roomName: 'suite pacifique',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite atlantique',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite manche',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite mer du nord',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite pacifique',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite mer du nord',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite atlantique',
                size: 2,
                id: 7
            },
            {
                roomName: 'suite pacifique',
                size: 4,
                id: 8
            },
            {
                roomName: 'suite atlantique',
                size: 3,
                id: 9
            },
            {
                roomName: 'suite atlantique',
                size: 5,
                id: 10
            },
            {
                roomName: 'suite pacifique',
                size: 2,
                id: 11
            },
            {
                roomName: 'suite mer du nord',
                size: 2,
                id: 12
            },
            {
                roomName: 'suite manche',
                size: 4,
                id: 13
            },
            {
                roomName: 'suite manche',
                size: 3,
                id: 14
            },
            {
                roomName: 'suite mer du nord',
                size: 5,
                id: 15
            },
        ]
    },
    {
        id: 3,
        name: 'hotel des Pins',
        roomNumbers: 7,
        pool: true,
        rooms: [
            {
                roomName: 'suite bordelaise',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite marseillaise',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite nicoise',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite canoise',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite hendaiar',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite canoise',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite nicoise',
                size: 2,
                id: 7
            }
        ]
    }
];


// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri

/*const hostel = hostels
    .sort((value1, value2)=> value2.roomNumbers - value1.roomNumbers)
    .map(value => value.name);
console.log(hostel);
console.log(hostels);*/

// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que 3 places ou exactement 3 places et les classer par ordre alphabétique selon le non de la chambre

/*const hostel = hostels
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue.rooms), [])
    .filter(value => value.size >= 3)
    .sort((value1, value2) => value1.roomName < value2.roomName ? -1 : 1 );


console.log(hostel);*/

// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName

/*hostels.map(value =>{
    value.rooms
        .map( value1 =>{
            value1.roomName = value1.roomName
                .split(' ')
                .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(' ')
        })

})
console.log(hostels);*/


// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres

/*hostels.map(value => value.rooms = value.rooms
    .filter(value => value.size <= 3
    )
)
    hostels.map(value => value.roomNumbers = value.rooms.length);
console.log(hostels);*/


// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostels, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)



/*const hostel = hostels.findIndex(hostel => hostel.name === 'hotel ocean');
const hostel1 = hostels[hostel];
const [hostel2] = hostels.splice(hostel, 1);
[hostel2].map(value => value.rooms = []);
[hostel2].map(value => value.roomNumbers = value.rooms.length);
hostels.push(hostel2);
hostels.sort ((value1, value2) => value1.name < value2.name ? -1 : 1);
const newIndex = hostels.indexOf(hostel1);


console.log(hostel);
console.log(hostel1);
console.log(hostel2);
console.log(hostels);
console.log(newIndex);*/




// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'

/*const myObject = {};
hostels.forEach(value => {
    myObject [value.name] = value.rooms.filter(value => value.roomName === 'suite marseillaise').length > 0
});
console.log(myObject);*/