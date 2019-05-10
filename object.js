const hostels = {
    hotel1: {
        id: 1,
        name: 'hotel rose',
        roomNumbers: 10,
        pool: true,
        rooms:
            {
                room1: {
                    roomName: 'suite de luxe',
                    size: 2,
                    id: 1
                },
                room2: {
                    roomName: 'suite nuptiale',
                    size: 2,
                    id: 2
                },
                room3: {
                    roomName: 'suite familiale',
                    size: 4,
                    id: 3
                },
                room4: {
                    roomName: 'suite budget',
                    size: 2,
                    id: 4
                },
                room5: {
                    roomName: 'suite familiale',
                    size: 4,
                    id: 5
                },
                room6: {
                    roomName: 'suite budget',
                    size: 3,
                    id: 6
                },
                room7: {
                    roomName: 'suite de luxe',
                    size: 2,
                    id: 7
                },
                room8: {
                    roomName: 'suite familiale',
                    size: 4,
                    id: 8
                },
                room9: {
                    roomName: 'suite de luxe',
                    size: 3,
                    id: 9
                },
                room10: {
                    roomName: 'suite présidentielle',
                    size: 5,
                    id: 10
                }
            }


    },
    hotel2: {
        id: 2,
        name: 'hotel ocean',
        roomNumbers: 15,
        pool: false,
        rooms: {
            room1: {
                roomName: 'suite pacifique',
                size: 2,
                id: 1
            },
            room2: {
                roomName: 'suite atlantique',
                size: 2,
                id: 2
            },
            room3: {
                roomName: 'suite manche',
                size: 4,
                id: 3
            },
            room4: {
                roomName: 'suite mer du nord',
                size: 2,
                id: 4
            },
            room5: {
                roomName: 'suite pacifique',
                size: 4,
                id: 5
            },
            room6: {
                roomName: 'suite mer du nord',
                size: 3,
                id: 6
            },
            room7: {
                roomName: 'suite atlantique',
                size: 2,
                id: 7
            },
            fkdjhkjsdh: {
                roomName: 'suite pacifique',
                size: 4,
                id: 8
            },
            lfehfgkdjsdhfjd: {
                roomName: 'suite atlantique',
                size: 3,
                id: 9
            },
            eofuhdkfdhksjfh: {
                roomName: 'suite atlantique',
                size: 5,
                id: 10
            },
            flezhkfdjhkdgfskf: {
                roomName: 'suite pacifique',
                size: 2,
                id: 11
            },
            zuhakahaljdlh: {
                roomName: 'suite mer du nord',
                size: 2,
                id: 12
            },
            lfekjhljhdkjdfhfdkj: {
                roomName: 'suite manche',
                size: 4,
                id: 13
            },
            zkoiuzaojaojaklj: {
                roomName: 'suite manche',
                size: 3,
                id: 14
            },
            djkjfhkjfhfdkjhfdj: {
                roomName: 'suite mer du nord',
                size: 5,
                id: 15
            },
        }
    },
    hotel3: {
        id: 3,
        name: 'hotel des Pins',
        roomNumbers: 7,
        pool: true,
        rooms: {
            ch1: {
                roomName: 'suite bordelaise',
                size: 2,
                id: 1
            },
            ch2: {
                roomName: 'suite marseillaise',
                size: 2,
                id: 2
            },
            ch23: {
                roomName: 'suite nicoise',
                size: 4,
                id: 3
            },
            ch89: {
                roomName: 'suite canoise',
                size: 2,
                id: 4
            },
            sshs: {
                roomName: 'suite hendaiar',
                size: 4,
                id: 5
            },
            sdisduye: {
                roomName: 'suite canoise',
                size: 3,
                id: 6
            },
            ksjqhfkhfskjdh: {
                roomName: 'suite nicoise',
                size: 2,
                id: 7
            }
        }
    }
};


/// Faire tous les exos dans un premier temps avec des boucles for puis avec Object.keys ou Object.values


/*
Exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
le nom des hotels dans leur ordre de tri
*/

const result = Object.values(hostels)
    .sort((value1, value2) => value2.roomNumbers - value1.roomNumbers)
    .map((hostel) => hostel.name);

console.log(result);






// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que ou 3 places et les classer par ordre alphabétique selon le non de la chambre

// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName


// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres

// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostel, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)

// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'