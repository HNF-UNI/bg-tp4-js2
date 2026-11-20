"use strict"; // mode strict slide 141

// tableau d'objets persons (slide 40), let car deleteRow le remplace
let persons = [
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
// total des points
let total_points = 0;

// Appel de init()
init();

function init() {
	// boucle for..of sur persons (slide 44)
	for (const person of persons) {
		doInsert(person.nom, person.prenom, person.points);
	}
}

function doInsert(nom, prenom, points) {
	// on rajoute les points au total, += slide 41
	total_points += points;

	// lignes + 1 et on la met dans num au lieu de 99
	lignes++;
	const num = lignes;
	doInsertRowTable(num, nom, prenom, points);

	update_summary();
}

// ajout a partir du formulaire
function doNewData() {
	const elt_nom = document.getElementById("form_nom");
	const elt_prenom = document.getElementById("form_prenom");
	const elt_points = document.getElementById("form_points");

	// on lit l'attribut value des champs (slide 93)
	const nom = elt_nom.value;
	const prenom = elt_prenom.value;
	const points = parseInt(elt_points.value); // parseInt pour avoir un entier

	// si un champ est vide on ajoute pas, if else slide 42
	if (nom === "" || prenom === "" || Number.isNaN(points)) {
		window.alert("Formulaire incomplet !"); // alert slide 34
	} else {
		doInsert(nom, prenom, points);

		// on rajoute aussi la personne dans persons
		persons.push({ nom: nom, prenom: prenom, points: points });

		// on vide les champs
		elt_nom.value = "";
		elt_prenom.value = "";
		elt_points.value = "";
	}
}

// met a jour l'espace resume
function update_summary() {
	// p1 et p3 avec leur id (slide 61)
	const element_lignes = document.getElementById("p1");
	const element_points = document.getElementById("p3");

	element_lignes.innerText = lignes + " ligne(s)";
	element_points.innerText = "Total point(s)= " + total_points;

	// en plus : la moyenne des points dans p2
	const element_moyenne = document.getElementById("p2");
	// si le tableau est vide on divise pas par 0, if else slide 42
	if (lignes === 0) {
		element_moyenne.innerText = "Moyenne= 0";
	} else {
		element_moyenne.innerText = "Moyenne= " + parseInt(total_points / lignes);
	}
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

// en plus : coche toutes les lignes du tableau
function selectAll() {
	const chkboxes = document.querySelectorAll(".col_chkbox input");
	// for..of sur les checkbox (slide 44)
	for (const chkbox of chkboxes) {
		chkbox.checked = true;
	}
}

// supprime les lignes cochees
function deleteRow() {
	// tableau vide, rien a supprimer
	if (lignes === 0) {
		window.alert("Le tableau est vide !");
		return;
	}

	// le tableau et les checkbox cochees, querySelectorAll slide 76
	const table = document.querySelector("table");
	const coches = table.querySelectorAll(".col_chkbox input:checked");

	if (coches.length === 0) {
		window.alert("Sélectionnez au moins une ligne !");
		return;
	}

	// si il clique sur annuler on sort
	if (!window.confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
		return;
	}

	const rows = table.querySelectorAll(".row");
	// les persons qu'on garde
	const restants = [];

	// boucle for avec i (slide 44), les lignes sont dans le meme ordre que persons
	for (let i = 0; i < rows.length; i++) {
		const chkbox = rows[i].querySelector(".col_chkbox input");
		if (chkbox.checked) {
			// les points sont dans la 4e cellule
			const points = parseInt(rows[i].children[3].innerText);
			total_points -= points;
			lignes--;
			rows[i].remove(); // remove slide 100
		} else {
			restants.push(persons[i]); // push slide 38
		}
	}
	persons = restants;

	window.alert("Suppression effectuée !");
	update_summary();
}
