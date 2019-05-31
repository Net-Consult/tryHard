// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri


// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que ou 3 places et les classer par ordre alphabétique selon le non de la chambre

// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName


// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres

// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostel, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)

// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'


class Room {
    roomName;
    size;
    id;

    constructor(roomName, size, id) {
        this.roomName = roomName;
        this.size = size;
        this.id = id;
    }


}


const room1 = new Room("suiteRoyal", 2, 1);
const room2 = new Room("suite de luxe", 2, 2);
const room3 = new Room("suite familiale", 3, 3);
const room4 = new Room("suite nuptiale", 5, 4);
const room5 = new Room("suite budget", 4, 5);
const room6 = new Room("suite fabuleuse", 2, 6);
const room7 = new Room("suite pacifique", 2, 7);
const room8 = new Room("suite atlantique", 2, 8);
const room9 = new Room("suite manche", 3, 9);
const room10 = new Room("suite mer du nord", 2, 10);
const room11 = new Room("suite pacifique", 4, 11);
const room12 = new Room("suite mer du sud", 3, 12);
const room13 = new Room("suite mer de l'est", 4, 13);
const room14 = new Room("suite de la  manche", 3, 14);
const room15 = new Room("suite de l'ouest", 5, 15);
const room16 = new Room("suit marseillaise", 4, 16);
const room17 = new Room("suit parisienne", 4, 17);
const room18 = new Room("suit oracle", 3, 18);
const room19 = new Room("suit du bonheur", 4, 19);
const room20 = new Room("suit marseillaise2", 2, 20);
const room21 = new Room("suit blanche", 1, 21);
const room22 = new Room("suit d'hiver", 5, 22);
const room23 = new Room("suit de l'est", 4, 23);

const hostel1 = [room1, room2, room3, room4, room5, room6, room7];
const hostel2 = [room8, room9, room10, room11, room12, room13, room14];
const hostel3 = [room15, room16, room17, room18, room19, room20, room21, room22, room23];

console.log(hostel1);
console.log(hostel2);
console.log(hostel3);

class Hostels {
    id;
    name;
    roomNumbers;
    pool;
    rooms;

    constructor(id, name, roomNumbers, pool, ...rooms) {

        this.id = id;
        this.name = name;
        this.roomNumbers = roomNumbers;
        this.pool = pool;
        this.rooms = rooms;

    }
}

const Hostel1 = new Hostels(1, "Hotel Rose", 23, true, ...hostel1);
const Hostel2 = new Hostels(2, "Hotel Ocean", 15, false, ...hostel2);
const Hostel3 = new Hostels(3, "Hotel Des Pins", 10, true, ...hostel3);


class Pays  {
    name;
    hostels;

    constructor(name, ...hostels){
        this.name = name;
        this.hostels = hostels;
    }
}

const result =[Hostel1, Hostel2, Hostel3];

const pays = new Pays("Cambrai", ...result);
console.log(pays);







