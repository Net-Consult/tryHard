

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

