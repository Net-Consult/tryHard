Javascript 
----------

>JavaScript (qui est souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat. Le code JavaScript est interprété ou compilé à la volée (JIT). C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript.

>Le standard pour JavaScript est ECMAScript. En 2012, tous les navigateurs modernes supportent complètement ECMAScript 5.1. Les anciens navigateurs supportent au minimum ECMAScript 3. Une sixième version majeure du standard a été finalisée et publiée le 17 juin 2015. Cette version s'intitule officiellement ECMAScript 2015 mais est encore fréquemment appelée ECMAScript 6
 ou ES6. Étant donné que les standards ECMAScript sont édités sur un rythme annuel, cette documentation fait référence à la dernière version en cours de rédaction, actuellement c'est ECMAScript 2019.
 
 Les Fonctions
 ------------
 
 > De manière générale, une fonction est un « sous-programme » qui peut être appelé par du code extérieur à la fonction (ou du code interne dans le cas d'une récursion). Comme le programme, une fonction est composée d'une suite d'instructions qui forment le corps de la fonction. Il est parfois possible de passer des valeurs à une fonction et une fonction peut éventuellement retourner (ou renvoyer) une valeur.
 
>En JavaScript, les fonctions sont des objets de première classe. Cela signifie qu'elles peuvent être manipulées et échangées, qu'elles peuvent avoir des propriétés et des méthodes, comme tous les autres objets JavaScript. Les fonctions sont des objets Function.
 
 Syntaxe
 -------
>function nom([param1[, param2,[..., paramN]]]) {
   [instructions]
   
}

Exemple :
-------

>Dans l'exemple qui suit, on déclare une fonction qui renvoie le total des ventes en fonction des nombres d'unités vendues pour les produits a, b, et c.

function calc_ventes(nb_produits_a, nb_produits_b, nb_produits_c) {
   return nb_produits_a*79 + nb_produits_b * 129 + nb_produits_c * 699;
}

Les Boucles
-----------

>Les boucles permettent de répéter des actions simplement et rapidement. Ce chapitre du guide JavaScript présente les différentes instructions qu'il est possible d'utiliser en JavaScript pour effectuer des itérations.

Syntaxe 
-------
>var pas;
for (pas = 0; pas < 5; pas++) {
   Ceci sera exécuté 5 fois
  À chaque éxécution, la variable "pas" augmentera de 1
  Lorsque'elle sera arrivée à 5, le boucle se terminera.
  console.log("Faire un pas vers l'est");
}

L'instruction for
----------------


L'instruction do...while permet de répéter un ensemble d'instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée. (NdT : littéralement « do...while » signifie « faire... tant que »). Une instruction do...while s'utilise de la façon suivante :


Exemple

for ([expressionInitiale]; [condition]; [expressionIncrément])
  instruction
  
  
 L'instruction while 
 -------------------
 
Une instruction while permet d'exécuter une instruction tant qu'une condition donnée est vérifiée. Cette instruction while s'utilise de la façon suivante :
 
while (condition)
  instruction
  Mais il est recommandée de ne pas l'utiliser .
