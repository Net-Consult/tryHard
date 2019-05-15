class Room {
    constructor(roomName, size) {
        this.roomName = roomName;
        this.size = size;
    }
}

class Hostel {
    constructor(name, pool, rooms) {
        this.name = name;
        this.pool = pool;
        this.rooms = rooms;
        this.roomNumbers = rooms.length;
    }
}

class Country {
    name;
    Hostel;
    Room;

    constructor(name,Hostel,...Room) {
        this.name = name;
        this.Hostel = Hostel;
        this.Room = Room;

        return this
    }
}



const country =  new Country('France', Hostel, Room);

console.log(country);


let hostels = [
        new Hostel('Hotel Printemps', true, [
        new Room('suite de luxe', 2),
        new Room('suite nuptiale', 2),
        new Room('suite familiale', 4),
        new Room('suite budget', 2),
    ]),
        new Hostel('Hotel Eiffel', false, [
        new Room('suite pacifique', 2),
        new Room('suite atlantique', 2),
        new Room('suite manche', 4),
        new Room('suite mer du nord', 2),
        new Room('suite indienne', 4),
        new Room('suite adriatique', 3),
    ]),

        new Hostel('Hotel Montmartre', true, [
        new Room('suite bordelaise', 2),
        new Room('suite marseillaise', 2),
        new Room('suite nicoise', 4),
        new Room('suite canoise', 2),
        new Room('suite hendaiar', 4),
    ]),
];



console.log(hostels);

// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri



// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que 3 places ou exactement 3 places et les classer par ordre alphabétique selon le nom de la chambre

// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName

// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres

// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostels, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)


// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'

