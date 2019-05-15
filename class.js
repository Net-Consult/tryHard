class Room {

    id;
    size;
    roomName;

    constructor(paramId, paramSize, paramRoomName) {

        this.id = paramId;
        this.size = paramSize;
        this.roomName = paramRoomName
    }
}


const room1 = new Room(1, 3, 'suite parisienne');
const room2 = new Room(2, 2, 'suite lyonnaise');
const room3 = new Room(3, 4, 'suite marseillaise');
const room4 = new Room(4, 2, 'suite bordelaise');
const room5 = new Room(5, 3, 'suite toulousaine');


class Hostel {

    id;
    name;
    roomNumbers;
    pool;
    rooms;

    constructor(id, name, roomNumbers, pool, ...rooms){

        this.id = id;
        this.name = name;
        this.roomNumbers = roomNumbers;
        this.pool = pool;
        this.rooms = rooms
    }
}

const hostel1 = new Hostel(1, 'Hotel ocean', 12, true, room1,room2, room3, room4, room5);

console.log(hostel1);






























// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri


// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que 3 places ou exactement 3 places et les classer par ordre alphabétique selon le non de la chambre


// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName


// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres


// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostel, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)


// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'

