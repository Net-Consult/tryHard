// exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires

/*

const person = {firstName : '', lastName: '', age : 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

const firstName =['Boussen','Fatma','Ibrahima','Anna Maria','Brice', 'Medhi','Sarida','Loic','Sebastien','Alina','Morgane','Sophie','Mathieu'];
const lastName = ['El Chapo','Mesrine','Al Capone','le Belge','Zampa','Ferrara','DeVito','Cicero','Abagnale','Carbone','Escobar','Barrow','Luciano','Dalton' ];


function generateFirstName(){return firstName[Math.floor(Math.random()*13)]};
function generateLastName(){return lastName[Math.floor(Math.random()*10)]};
function generateAge() {return Math.floor(Math.random()*100+1)};



const peopleList=[];

console.log (peopleList);

for(let i = 0 ; i<100;i ++){

    const personProfile= {
        prenom:generateFirstName(),
        nom:generateLastName(),
        age: generateAge()
    };

    peopleList.push(personProfile);

};

const moyenne = peopleList

    .reduce((acc,peopleList)=> acc + peopleList.age,0)/peopleList.length;

console.log(moyenne);

*/
// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau
/*
const pairTab = [];

for( let i= 4; pairTab.length<20;i++){

    if(i%2===0) pairTab.push(i)
    }

;

console.log(pairTab)

*/
// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.
/*
for(let i=0; i<100;i++){

    if (i%3===0) {console.log('"Fizz"')}
    else if (i%5===0){console.log('"Buzz"')}
    else {console.log(i)}

};
*/
