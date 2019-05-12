// exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
const person = {firstName : '', lastName: '', age : 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

const firstName = ['Harry', 'Hermione', 'Ron', 'Albus', 'Severus'];
const lastName = ['Potter', 'Granger', 'Weasley', 'Dumbledore', 'Rogue'];

function generateFirstName() {
    return firstName[Math.floor((Math.random()*5))]
}
console.log(generateFirstName());

function generateLastName() {
    return lastName[Math.floor((Math.random()*5))]
}
console.log(generateLastName());

function generateAge() {
    return (Math.floor(Math.random()*100+1))
}
console.log(generateAge());

const people = [];

for(let i=0; people.length<100; i++) {
    const newUser = {
       firstName: generateFirstName(),
        lastName: generateLastName(),
        age: generateAge()
    };
    people.push(newUser)
}
console.log(people);


// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau

const tab = [];
for (let i=4; tab.length<20; i+=2){
    tab.push(i);
}
    console.log(tab);

// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.

for (let i=1; i<200; i++) {
    if (i%3 === 0) (
        console.log('fizz'));
}   else if (i%5 === 0) {
    console.log('buzz');
    {else {
        console.log('fizzbuzz');
    }




































































































