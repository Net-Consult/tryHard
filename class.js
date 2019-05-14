

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
const room6 = new Room(6, 5, 'suite niçoise');


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

const hostel1 = new Hostel(1, 'hotel ocean', 2, true, room1,room2);
const hostel2 = new Hostel(2, 'hotel rose', 2, true, room3, room4);
const hostel3 = new Hostel(3, 'hotel des pins', 2, false, room5, room6);

class Hostels {
    hostels;

    constructor(...hostels) {
        this.hostels = hostels;
    }
}

const newHostels = new Hostels(hostel1, hostel2, hostel3);

class filterRoom {
     ranking;

     constructor(...ranking) {
         this.ranking = ranking;
     }


}


console.log(newHostels);
