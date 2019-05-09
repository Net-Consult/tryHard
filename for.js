// exercice 1 : 'générer un array avec 100 'objets avec la forme ci dessous, dont les données sont toutes aléatoires
const person = {firstName : '', lastName: '', age : 0};
// bonus : calculer la moyenne des âges de personnes en utilisant un reduce

/*

const firstName=[ 'fatma', 'mariem','moufida', 'mohammed', 'nizar', 'fawzi', 'amira', 'fadhila', 'yasmine', 'karim'];

const lastName =['aouissaoui', 'ghribi', 'shili', 'miraoui', 'khardani', 'hamzaoui', 'zerai', 'hammedi', 'jihnaoui', 'madiouni'];



   function generatefirstName() {

        return firstName [Math.floor(Math.random()*10)]

}

    function generatelastName(){

         return lastName [Math.floor(Math.random()*10)]
}

   function generateage(){
       return Math.floor(Math.random()*10)+1
}


console.log(generatefirstName());
console.log(generatelastName());
console.log(generateage());


const people=[];
for(let i=1 ; people.length<100 ;i++) {

    const person = {
        firstName: generatefirstName(),
        lastName: generatelastName(),
        age: generateage()
    };

    people.push(person);
}
console.log(people);

const sum=people.reduce((accumulator, currentValue) =>{

   return  accumulator + currentValue.age

} , 0)
const moyenne=sum/person.length;

console.log(sum);*/


// exercice 2 : générer un tableau contenant des nombres pairs consécutifs, le premier nombre du tableau doit être 4,
// on doit arreter de remplir le tableau quand il y a 20 nombres pairs dans le tableau






/*

const tab=[];

for(let i=4;tab.length<20 ;i++){

    if(i %2===0)

    tab.push(i);

}

console.log(tab);*/


// exercice 3 : Écrire un programme qui affiche les nombres de 1 à 199 avec un console log.
// Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”.
// Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.


/*


for ( let Nombre = 1; Nombre <= 199; Nombre++ ) {

if(Nombre % 3===0){
    console.log('Fizz');
}
if(Nombre % 6===0){
    console.log('Buzz');
}
if (Nombre % 3===0); (Nombre % 6===0)
    console.log( 'Nombre' )}


*/











