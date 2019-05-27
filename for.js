// exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
const person = {firstName: '', lastName: '', age: 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

/*const firstName = ['loic', 'nathan', 'eleonor', 'diana', 'bryce', 'fatma', 'anna', 'laurent', 'mehdi', 'sarida', 'sebastien'];
const lastName = ['Smith', 'Dupont', 'Darc', 'Dunord', 'Lejeune', 'Levieux', 'Boulet', 'Lechauve', 'Lepro', 'Lesilencieux'];

function generateAge() {
    return Math.floor(Math.random() * 100 + 1)
}

function generateFirstName() {
    return firstName[Math.floor(Math.random() * 11)]
}

function generateLastName() {
    return lastName[Math.floor(Math.random() * 10)]
}

const people = [];

for (let i = 0; people.length < 100; i++) {
    const newpeople = {
        firstName: generateFirstName(),
        lastName: generateLastName(),
        age: generateAge()
    };
    people.push(newpeople)
}

const Moy = people.reduce((previousValue, currentValue) => previousValue + currentValue.age / 100, 0);*/

// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau

/*
const paire = [];
for(let i = 4;paire.length < 20;i+=2){
    paire.push(i)
}

console.log(paire);
*/

// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.

/*for (let i = 1; i < 200; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    if (fizz && buzz) {
        console.log('fizz buzz')
    } else if (fizz) {
        console.log('fizz')
    } else if (buzz) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}*/