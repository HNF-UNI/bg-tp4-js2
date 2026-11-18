"use strict"; // mode strict slide 141

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
