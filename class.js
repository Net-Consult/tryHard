

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hostelRoomName = ['suite parisienne', 'suite lilloise', 'suite marseillaise', 'suite bordelaise', 'suite lyonnaise',
    'suite niçoise', 'suite de perpignan', 'suite brestoise', 'suite nantaise', 'suite de aliens'];



class Room {

    addId;
    addSize;
    addRoomName;

    constructor(addId, addSize, addRoomName) {
        Room.addId = addId;
        Room.addSize = addSize;
        Room.addRoomName = addRoomName;
    }


    addId() {
        return id;
    }

    addSize() {
        return size[Math.floor(Math.random() * 10)];
    }

    addRoomName() {
        return hostelRoomName[Math.floor(Math.random() * 10)];
    }

/*    static addGenerateRooms() {

        let rooms = [];

        for (let i = 0; rooms.length < 10; i++) {

            const newRooms = {
                id: Room.addId(),
                size: Room.addSize(),
                roomName: Room.addRoomName()
            };

            rooms.push(newRooms);
        }
    }*/
}

const result = new Room(addId, addSize, addRoomName);
console.log(result);