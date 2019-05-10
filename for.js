 exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
/
const person = {firstName : '', lastName: '', age : 0};
//bonus : calculer la moyenne des âges de personnes en utilisant un reduce


const firstName= ['tata','toto','snow' ,'blanc','philippe','potter','malefoy','londubat','granger','weasley'];
const lastName= ['rita','lilio','john','laurent','edouard','harry' ,'drago', 'neville', 'hermione','ron'];

function generatefirstName() {

    return firstName [Math.floor(Math.random()*10)]
}

function generateLastName() {
    return lastName [Math.floor(Math.random() * 10)]


}function generateAge(){
    return Math.floor(Math.random()*10)

}


console.log( generateLastName());
console.log(generatefirstName());
console.log(generateage());

const people = [ ];
for (let i = 1; people.length <100; i++) {
}
const personne = {
    firstName : generatefirstName(),
    lastName : generateLastName(),
    age: generateage()

};
   people.push(person);
}
console.log(people);

const sum = people.reduce((accumulator,currentValue)=> {
    return accumulator+currentValue.age


},0)


const moyenne=sum/person.length;

console.log (sum);












*/








// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau


// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.

