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
    trie() {
        this.name.sort((hostel1, hostel2) => hostel2.roomNumbers - hostel1.roomNumbers);
        return this;
    }

}


class City {

    hotels = [];

    constructor(...hotels) {
        this.hotels = hotels;
    }

    displayCity() {
        console.log(this);
        return this;
    }

    sortByRoomNumber() {
        this.hotels = this.hotels.sort((hotel1, hotel2) => hotel2.roomNumbers - hotel1.roomNumbers);
        return this;
    }

    getUnder3RoomsOut() {
        this.hotels = this.hotels.map(hostel => hostel.rooms).reduce((acc, hostel) => acc.concat(hostel),[])
            .filter(room => room.size >= 3).sort((hostel1, hostel2) => hostel2.roomName > hostel1.roomName ? -1 : 1);
        return this;
    }

    getToUpperCase() {
        this.hotels = this.hotels.map(hostel => {hostel.rooms.map(room => room.roomName = room.roomName
            .split(' ').map(chName => chName.charAt(0).toLocaleUpperCase() + chName.slice(1))
            .join(' '));return hostel});
        return this;
    }

    filterOver3rooms() {
        this.hotels = this.hotels.map(hostel => { hostel.rooms = hostel.rooms.filter(room => room.size >= 3);
            return hostel}).map(hostel => { hostel.roomNumbers = hostel.rooms.length;
            return hostel;});
        return this;
    }


}

const room1 = new Room('suite kama', 3, 1);
const room2 = new Room('suite saumon', 4, 2);

const room3 = new Room('suite sutra', 1, 1);
const room4 = new Room('suite hokuto', 2, 2);

const room5 = new Room('suite shinken', 3, 1);
const room6 = new Room('suite raoul', 4, 2);

const hostel1 = new Hostel(1, 'hotel océan', 5, true, room1, room2);
const hostel2 = new Hostel(2, 'hotel quadruple', 2, false, room3, room4);
const hostel3 = new Hostel(3, 'hotel saturna', 3, false, room5, room6);


const city = new City(hostel1, hostel2, hostel3);


/*city.sortByRoomNumber().displayCity();*/

/*city.getUnder3RoomsOut().displayCity();*/

/*city.getToUpperCase().displayCity();*/

/*city.filterOver3rooms().displayCity();*/

city.displayCity()






