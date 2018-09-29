document.body.innerHTML="";
menu = ["menu1",1,2,["memu2",3,4],["menu3",5,6]];

function creaMenu(menu)
{

	for (x in menu) 
	{
			if (Array.isArray(menu[x]))
		 	{
		 		document.write("<li>")
		 		document.write("<ul>");
		 		creaMenu(menu[x]);
		 		document.write("</ul>")
		 		document.write("</li>")
		 	}

		 	else 
		 	{
		 		document.write("<li>");
		 		document.write(menu[x]);
		 		document.write("</li>")
		 	}
	 	
	 }



}
creaMenu(menu);
