// crea un menu dinamico
document.body.innerHTML="";
menu = ["menu1",1,2,["memu2",1,2],["menu3",1,2]];

function creaMenu(menu)
{
	document.write("<ul>")
	for (x in menu) 
	{
		if (Array.isArray(menu[x]))
	 	{
	 		document.write("<li>"+menu[x][0]+"</li>");
	 		

	 		creaMenu(menu[x]);
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
creaMenu(menu);
