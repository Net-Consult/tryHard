


/*
Exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
Bonus : calculer la moyenne des âges de personnes en utilisant un reduce de la forme :
{firstName: " ", lastName: " ", age: xx}
*/
/*

const firstName = ['Sarida', 'Loïc', 'Brice', 'Mehdi', 'Laurent',
    'Houssen', 'Anna', 'Fatma', 'Ibrahima', 'Morgane'];
const lastName = ['git', 'css', 'markdown', 'javascript',
    'python', 'java', 'php', 'html', 'swift', 'sql'];


function generateFirstName() {
    return firstName[Math.floor(Math.random()*10)];
}

function generateLastName() {
    return lastName[Math.floor(Math.random()*10)];
}

function age() {
    return Math.floor(Math.random() * 100 + 1);
}


let user = [];

for (let i = 0; user.length < 20; i++) {

    const newPerson = {
        firstName: generateFirstName(),
        lastName: generateLastName(),
        age: age()
    };

    user.push(newPerson)
}

console.log(user);

const ageAverage = user
    .reduce((accumulator, average) => {
        return accumulator + average.age / user.length
    }, 0).toFixed(2);

console.log(ageAverage);
*/


/*
Exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4, on
doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau.
*/
/*

const tab = [];

for (let n = 4; n < 44; n+=2) {

    tab.push(n);
}

console.log(tab);
*/


/*
Exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.
*/
/*

for (let i = 0; i < 199; i++) {

    if ( i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if( i % 3 === 0) {
        console.log('Fizz');
    } else if ( i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/






















