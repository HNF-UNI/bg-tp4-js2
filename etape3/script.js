"use strict"; // mode strict slide 141

// tableau d'objets persons (slide 40)
const persons = [
	{
		nom: "nom-1",
		prenom: "prenom-1",
		points: 5
	},
	{
		nom: "nom-2",
		prenom: "prenom-2",
		points: 10
	},
	{
		nom: "nom-3",
		prenom: "prenom-3",
		points: 15
	}
];

// compteur des lignes inserees
let lignes = 0;

// Appel de init()
init();

function init() {
	// boucle for..of sur persons (slide 44)
	for (const person of persons) {
		doInsert(person.nom, person.prenom, person.points);
	}
}

function doInsert(nom, prenom, points) {
	// lignes + 1 et on la met dans num au lieu de 99
	lignes++;
	const num = lignes;
	doInsertRowTable(num, nom, prenom, points);
}

function doInsertRowTable(num, nom, prenom, points) {
	// le tableau, [0] car ca retourne une collection (slide 66)
	const table = document.getElementsByTagName("table")[0];

	// nouvelle ligne tr, createElement slide 104
	const row = document.createElement("tr");
	row.setAttribute("class", "row");

	// les 5 colonnes
	const col1 = document.createElement("td");
	const col2 = document.createElement("td");
	const col3 = document.createElement("td");
	const col4 = document.createElement("td");
	const col5 = document.createElement("td");

	col1.innerText = num;
	col2.innerText = nom;
	col3.innerText = prenom;
	col4.innerText = points;

	// derniere colonne = une checkbox
	const chkbox = document.createElement("input");
	chkbox.setAttribute("type", "checkbox");
	col5.append(chkbox);

	// les classes avec setAttribute (slide 107)
	col1.setAttribute("class", "col_number");
	col2.setAttribute("class", "col_text");
	col3.setAttribute("class", "col_text");
	col4.setAttribute("class", "col_number");
	col5.setAttribute("class", "col_chkbox");

	// on met les colonnes dans la ligne puis la ligne dans le tableau
	row.append(col1);
	row.append(col2);
	row.append(col3);
	row.append(col4);
	row.append(col5);
	table.append(row);
}

// affiche persons dans la console, console.log slide 33
function consoleTableau() {
	console.log(persons);
}
