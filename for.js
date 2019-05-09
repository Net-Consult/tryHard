/*// exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
const person = {firstName : '', lastName: '', age : 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

const firstName = ['Loic', 'Brice', 'Anna', 'Ibrahima', 'Sebastien', 'Alina', 'Morgane', 'Bender', 'Fry', 'Léo', 'Président'];
const lastName = ['Charo', 'Loup', 'Vautour', 'Cannibale', 'Chouette', 'Canaille', 'Tricard', 'Fripouille', 'Bandit', 'Chicken', 'Pard'];

function generateName() {
    return firstName[Math.floor(Math.random()*11)];
}

function generateLastName() {
    return lastName[Math.floor(Math.random()*11)];
}

function age() {
    return Math.floor(Math.random() * 100 + 1);
}

let persons = [];


for (let i = 0; persons.length < 50; i++) {
    const personne = {
        firstName: generateName(),
        lastName: generateLastName(),
        age: age()
    };
    persons.push(personne)
}

const moyenAge = persons
    .reduce((acc, currentValue) => {return acc + currentValue.age / persons.length},0);

console.log(persons);
console.log(moyenAge);*/

// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau

/*let tab = [];

for (let i = 4; tab.length < 20; i++) {
    if (i % 2 === 0) {
        tab.push(i);
    }
}

console.log(tab);*/

// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.


/*for (let i = 1; i < 200; i++) {
    if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log('Fizz');
    } else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log('Buzz');
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}*/

