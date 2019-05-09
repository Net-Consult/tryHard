const hostels = [
    {
        id: 1,
        name: 'hotel rose',
        roomNumbers: 10,
        pool: true,
        rooms: [
            {
                roomName: 'suite de luxe',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite nuptiale',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite budget',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite budget',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite de luxe',
                size: 2,
                id: 7
            },
            {
                roomName: 'suite familiale',
                size: 4,
                id: 8
            },
            {
                roomName: 'suite de luxe',
                size: 3,
                id: 9
            },
            {
                roomName: 'suite présidentielle',
                size: 5,
                id: 10
            }
        ]

    },
    {
        id: 2,
        name: 'hotel ocean',
        roomNumbers: 15,
        pool: false,
        rooms: [
            {
                roomName: 'suite pacifique',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite atlantique',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite manche',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite mer du nord',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite pacifique',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite mer du nord',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite atlantique',
                size: 2,
                id: 7
            },
            {
                roomName: 'suite pacifique',
                size: 4,
                id: 8
            },
            {
                roomName: 'suite atlantique',
                size: 3,
                id: 9
            },
            {
                roomName: 'suite atlantique',
                size: 5,
                id: 10
            },
            {
                roomName: 'suite pacifique',
                size: 2,
                id: 11
            },
            {
                roomName: 'suite mer du nord',
                size: 2,
                id: 12
            },
            {
                roomName: 'suite manche',
                size: 4,
                id: 13
            },
            {
                roomName: 'suite manche',
                size: 3,
                id: 14
            },
            {
                roomName: 'suite mer du nord',
                size: 5,
                id: 15
            },
        ]
    },
    {
        id: 3,
        name: 'hotel des Pins',
        roomNumbers: 7,
        pool: true,
        rooms: [
            {
                roomName: 'suite bordelaise',
                size: 2,
                id: 1
            },
            {
                roomName: 'suite marseillaise',
                size: 2,
                id: 2
            },
            {
                roomName: 'suite nicoise',
                size: 4,
                id: 3
            },
            {
                roomName: 'suite canoise',
                size: 2,
                id: 4
            },
            {
                roomName: 'suite hendaiar',
                size: 4,
                id: 5
            },
            {
                roomName: 'suite canoise',
                size: 3,
                id: 6
            },
            {
                roomName: 'suite nicoise',
                size: 2,
                id: 7
            }
        ]
    }
];


// exercice 1 : trier les hotels par nombre de chambres (plus grand en 1er) et créer un tableau contenant seulement
// le nom des hotels dans leur ordre de tri

/*const hostel=hostels

    .sort( (room1, room2) => room2.roomNumbers - room1.roomNumbers)
    .map( value => value.name)


console.log(hostel);*/

// exercice 2 : faire un tableau avec toutes les chambres de tous les hotels, et ne garder que les chambres qui
// ont plus que 3 places ou exactement 3 places et les classer par ordre alphabétique selon le nom de la chambre
/*
const hostel=hostels
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue.rooms),[])
     .filter(word =>word.size>=3 )

            .sort((value1,value2)=>{
          value1.roomName < value2.roomName ? -1:1});
console.log(hostel);*/

// exercice 3 : mettre une majuscule à tous les mots qui sont dans l'attribut RoomName

/*
const hostel=hostels
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue.rooms),[])


    .map(value => value.roomName.charAt(0).toUpperCase()+ value.roomName.slice(1));
console.log(hostel);
*/

// exercice 4 : enlever toutes les chambres qui ont plus de 3 places et changer la valeur de roomNumbers pour qu'elle reflete
// le nouveau nombre de chambres


  /* hostels=hostels.map(hostel=>{hostel.rooms=hostel.rooms.filter(rooms=>rooms.size<=3)

       return hostel

});
   console.log(hostels)

   .map(hostel=>{hostel.roomNumbers=hostel.rooms.length;

              return hostel;});
   console.log(hostels);



*/



// exercice 5  : extraire du tableau hostels l'hotel qui a le nom 'hotel ocean' en le supprimant du tableau, et le mettre dans une nouvelle variable
// puis effacer toutes ses chambres et mettre à jour sa valeur room number, puis pusher l'hotel modifié dans hostel, puis faire un sort par nom d'hotel
// puis donner le nouvel index de l'hotel océan (faire 2 méthodes : avec indexOf et avec un foreach)

      // const occean=hostels.filter(value => value.name=='hotel ocean');
      // hostels.splice(occeanIndex,1);
        // const occean=[occeanIndex]
             /* occean.rooms=[]
              occean.roomNumbers=occean.rooms.length

              hostels.push(occean)

              hostels.sort((hostel1,hostel2)=>hostel2.name<hostel1.name ? -1:1);

              const newIndex=hostels.indexOf(occean);


              console.log(hostels);
              console.log(newIndex);
              */
      // hotelocean.delete(4);


           //.splice(rooms)







// exercice 6 : créer un objet dont les clés sont le nom des hotels et dont la valeur est un booléen qui indique si l'hotel a une chambre qui s'appelle 'suite marseillaise'
/*
let  map = new Map();
   map = hostels.forEach(value => {
    map.cle = value.name;
    value.rooms.forEach(room => {
        if(room.roomName=='suite marseillaise'){
            map.value= true;

        }else {
            map.value= false;

        }
    })
})
console.log(map);

*/









