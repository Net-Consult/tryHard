// exercice 1 : générer un array avec 100 objets avec la forme ci dessous, dont les données sont toutes aléatoires
const person = {firstName: '', lastName: '', age: 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

/*const firstname = ["Loïc", "Fabrice", "Silivie", "Laurent", "Farid", "Lisa", "Sebastien", "Mehdi", "Brice", "Suzi", "Meriam", "Sofia", "Maurice", "Bella", "Harry", " Hermonie", "Herouane", "Slimane", "Adan", "Marie"];
const lastname = ["Dupont", "Bernard", "Thomas", "Rousseau", "Taibet", "Leroy", "Girard", "Legouloum", "Muller", "Lefevre", "Guerin", "Boyer", "Lambert", "Vincent", "Duval", "Barbier", "Martinez", "Arnaud", "Lemaire", "Roche",];

/*function generateage() {
    return Math.floor(Math.random() * 100 + 1)
}

function generatefirstName() {
    return firstname[Math.floor(Math.random() * 20)]
}

function generatelastname() {
    return lastname[Math.floor(Math.random() * 20)]
}

const people = [];

for (let i = 0; people.length < 100; i++) {
    let newpeople = {
        firstName: generatefirstName(),
        lastName: generatelastname(),
        age: generateage(),
    };
    people.push(newpeople)
}
const people1 = people.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante.age / 100, 0);

/*console.log(people);*/
/*console.log(people1);*/


// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau

/*const tableau = [];
for (let i = 4; tableau.length < 20; i += 2) {
    tableau.push(i)
}

console.log(tableau);

// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.


for (let i = 1; i < 200; i++) {
    const fizz = i % 3 === 0 ;
    const buzz = i % 5 === 0;
    if (fizz && buzz) {
        console.log('fizz buzz')
    } else if (fizz) {
        console.log('fizz');
    } else if (buzz) {
        console.log('buzz')
    } else {
        console.log(i);
    }
}*/


