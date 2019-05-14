class Hostel {

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
    pushIn() {
        tab.push(this);
        return this;
}
}

class Room {
    roomName;
    size;
    id;

    constructor(roomName, size, id) {
        this.roomName = roomName;
        this.size = size;
        this.id = id;
    }
    pushIn() {
        tab2.push(this);
        return this;
    }
}

let tab = [];
let tab2 = [];

const hostel1 = new Hostel(1, 'hotel rose', 10, true);
const hostel2 = new Hostel(2, 'hotel ocean', 15, false);
const hostel3 = new Hostel(3, 'hotel des Pins', 7, true);

console.log(tab);
console.log(tab2);



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