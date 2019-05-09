







/*
Exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
bonus : calculer la moyenne des âges de personnes en utilisant un reduce
*/

const firstName = ['Sarida', 'Loïc', 'Brice', 'Mehdi', 'Laurent', 'Houssen', 'Anna', 'Fatma', 'Ibrahima', 'Morgane'];
const lastName = ['git', 'css', 'markdown', 'javascript', 'python', 'java', 'php', 'html', 'swift', 'sql'];


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

    persons.push(newPerson)
}

//const person = {firstName : '', lastName: '', age : 0};








// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau


// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.
