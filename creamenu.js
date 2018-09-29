// crea n menu dinamicamente desde un array
function creaMenu(menu)
{
	document.write("<ul>")
	for (x in menu) 
	{
		if (Array.isArray(menu[x]))
	 	{
	 		//document.write("<ul>");

	 		creaMenu(menu[x]);
	 		//document.write("</ul>");
	 	}

	 	else 
	 	{
	 		document.write("<li>");
	 		document.write(menu[x]);
	 		document.write("</li>")
	 	}
	 }


	document.write("</ul>");
}
