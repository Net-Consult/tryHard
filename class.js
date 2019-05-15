// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri

class Room {


     roomName ;
     size ;
     id ;

    constructor(paramRoomName, paramSize, paramId) {

      this.roomName = paramRoomName;
      this.size = paramSize;
      this.id = paramId;

    }



    display(){
        console.log(this);
        return this;
    }

}

class Hostel {

    id ;
    name ;
    roomNumbers ;
    pool ;
   rooms;

    constructor (paramId, paramName, paramRoomNumbers, paramPool, ...paramRooms) {

        this.name = paramName;
        this.pool = paramPool;
        this.roomNumbers = paramRoomNumbers;
        this.id = paramId;
        this.rooms = paramRooms;
    }




}





class Hostels {

    hotels;
    constructor(...hotels) {
        this.hotels = hotels;
    }




}



const room1 = new Room('suite de luxe', 2, 1);
const room2 = new Room('suite nuptiale', 2, 2);
const room3 = new Room('suite familiale', 4, 3);
const room4 = new Room('suite budget', 2, 4);
const room5 = new Room('suite familiale', 4, 5);
const room6 = new Room('suite budget', 3, 6);
const room7 = new Room('suite de luxe', 2, 7);
const room8 = new Room('suite familiale', 4, 8);
const room9 = new Room('suite de luxe', 3, 9);
const room10 = new Room('suite présidentielle', 5, 10);
const room11 = new Room('suite pacifique', 2, 1);
const room12 = new Room('suite atlantique', 2, 2);
const room13 = new Room('suite manche', 4, 3);
const room14 = new Room('suite mer du nord', 2, 4);
const room15 = new Room('suite pacifique', 4, 5);
const room16 = new Room('suite mer du nord', 3, 6);
const room17 = new Room('suite atlantique', 2, 7);
const room18 = new Room('suite pacifique', 4, 8);
const room19 = new Room('suite atlantique', 3, 9);
const room20 = new Room('suite atlantique', 5, 10);
const room21 = new Room('suite pacifique', 2, 11);
const room22 = new Room('suite mer du nord', 2, 12);
const room23 = new Room('suite manche', 4, 13);
const room24 = new Room('suite manche', 3, 14);
const room25 = new Room('suite mer du nord', 5, 15);
const room26 = new Room('suite bordelaise', 7, 1);
const room27 = new Room('suite marseillaise', 2, 2);
const room28 = new Room('suite niçoise', 4, 3);
const room29 = new Room('suite canoise', 2, 4);
const room30 = new Room('suite hendaiar', 4, 5);
const room31 = new Room('suite canoise', 3, 6);
const room32 = new Room('suite niçoise', 2, 7);

const hostel1 = new Hostel(1, 'hostel rose', 10, 'true',

    room1, room2, room3, room4, room5, room6, room7, room8, room9, room10)
const hostel2 = new Hostel(2,'hotel ocean',15, 'false',
    room11, room12, room13, room14, room15, room16, room16, room17, room18, room19, room20, room20, room21, room22)
const hostel3 = new Hostel(3,'hotel des pins', 7, 'true',
    room23, room24, room25, room26, room27, room28, room29, room30, room30, room31, room32)


const hostelses = new Hostels(hostel1, hostel2, hostel3)


hostelses.hotels = hostelses.hotels.sort((room1, room2) => room2.roomNumbers - room1.roomNumbers);


console.log(hostelses);
