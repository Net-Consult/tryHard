const hostels = [
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
/*const result = hostels

    .sort((hostel1, hostel2) => hostel2.roomNumbers - hostel1.roomNumbers)
    .map(hostel => hostel.name);


console.log(result);

// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que ou 3 places et les classer par ordre alphabétique selon le non de la chambre

const result1 = hostels
    .reduce((previous, current) => previous.concat(current.rooms), [])
    .filter(room => room.size >= 3)
    .sort((room1, room2) => {
            if (room1.roomName < room2.roomName) {
                return -1
            } else {
                return 1
            }
        }
    );


console.log(result1);


// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName

const result2 = hostels
hostels.map(hostel=> {
    hostel.rooms.map(room => {
            room.roomName = room.roomName.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join (' ')})
        return hostel
    }

    );
console.log(hostels);*/

// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres

/*const result3 = hostels

    hostels.map(hostel=> {
            hostel.rooms = hostel.rooms.filter(room=>(room.size<=3));
                    return hostels;
})
 hostels.map(hostel=>{hostel.roomNumbers = hostel.room});

console.log(hostels);*/

// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostel, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)

/*const hotels = hostels.filter(
    hostel=> hostel.name ==='hotel ocean'
);

              hostels.splice ('OceanIndex',1);*/



 /*hostels.map((hostels)=>{
        return(hostel.rooms-splice(0,15))});*/


/*.map = hostel.room=[];
                    hostels.roomNumbers=hostels.splice;
                        hostels.push(ocean);
                        hostels.sort((hostel1, hostel2)=> hostel1.name? -1:1);*/



/*console.log(hotels);*/

// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'


     
 } (name, hostels) {
            var inputs = $('hostels').map(function () {

                var key = this.attr('name'),
                value = this.attr('value');

            })



    
}
const hostel = {

    suiteMarseillaise: true,

    printIntroduction: function () {
        console.log(`hostels is ${this.suiteMarseillaise}. hostel? $ {.room}`)

    }
};

console.log(hostel);
/*const hostel1 = hostel.create(hostels)*/





/*const tabPrenom = ['Lucie', 'George', 'luc', 'Kris', 'Dave', 'Marie', 'Elena'];


const tabNom = ['Petit','Thomas','Michel','Roussel', 'Simon','Bailly','Langlois'];



function generateAge() {
    return Math.floor(Math.random() * 100 + 1);
}
console.log(generateAge());

function generateFirstName() {
   return tabPrenom[Math.floor(Math.random()*7)];
}
console.log(generateFirstName());

function generateName() {
    return tabNom[Math.floor (Math.random()*7)];
}
console.log(generateName());
const people = [];
for (let i=0; people.length<100; i=i+1){
    const newPerson={
        firstName:generateFirstName(),
        Name : generateName(),
        Age : generateAge(),
    };
    people.push (newPerson);

};

console.log(people);

/*math.floor(math.random()*10);
console.log(math.floor(math.random)*10);*/





