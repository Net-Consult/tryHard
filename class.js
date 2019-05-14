// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri

class Rooms {


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
      /*  add(room) {
            this.rooms.push(room);
            return this;
        }
    */

   /* display(){
        console.log(this);
        return this;
    }
*/
       /* add(room){
            this.rooms.push(room);
            return this;
        }*/
}


class Hostels {

    hotels;
    constructor(...hotels) {
        this.hotels = hotels;
    }
}



const room1 = new Rooms( 'suite de canoise', 3, 1,);
const room2 = new Rooms('suite de luxe', 3, 2);


const room4 = new Rooms('suite de nicoise', 4, 3);
const room5 = new Rooms('suite de nicoise', 4, 3);

const room6 = new Rooms('suite de nicoise', 4, 3);
const room7= new Rooms('suite de nicoise', 4, 3);


const hostel1 = new Hostel(1, 'hostel rose', 10, 'true', room1, room2)
const hostel2 = new Hostel(2,'hotel ocean',15, 'false', room4, room5)
const hostel3 = new Hostel(3,'hotel des pins', 7, 'true', room6, room7)


const hostelses = new Hostels(hostel1, hostel2, hostel3);




console.log(hostelses);