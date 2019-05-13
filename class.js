class Hostel {

    id;
    name;
    roomNumbers;
    pool;
    rooms;

    constructor(id, name, roomNumbers, pool, ...others) {
        this.id = id;
        this.name = name;
        this.roomNumbers = roomNumbers;
        this.pool = pool;
        this.rooms = others;
    }

    putIN() {
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

    putIN2() {
        tab2.push(this);
        return this;
    }

}


let tab = [];

let tab2 = [];

const hostel1 = new Hostel (1, 'hotel rose',  10, true, tab2);
const hostel2 = new Hostel (2, 'hotel océan', 15, false);
const hostel3 = new Hostel (3, 'hotel des pins', 7, true);

const room = new Room ('suite de luxe', 2, 1);

room.putIN2();


hostel1.putIN();
hostel2.putIN();
hostel3.putIN();


console.log(tab);
console.log(tab2);
