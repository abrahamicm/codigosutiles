~~~html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Editor</title>
</head>
<body style="overflow: hidden;">
	<input type="file"  id="file" style="display: none;" onchange="processFiles(this.files)">
	<input type="file"  id="input">
	<button onclick="file.click()"> abrir </button>
	 <button onclick="guardando()"> guardar </button> <br>
	<textarea name="" id="textarea" style="width: 100%; height: 80vh  "></textarea>

	<script>
		var file = document.getElementById('file');
		var input = document.getElementById('input');
		var textarea = document.getElementById('textarea');
		var fileName="";
		var data ="";
		function cl(x = "hola") {
			console.log(x);
		}
        function guardando(){
		data = textarea.value;
		if ( fileName != "" ){
			fileName = prompt("nombre del archivo") || "mi archivo";
		}

          
        	saveData(data, fileName);

        }
		var saveData = (function () {
			
			//fileName = prompt("nombre del archivo") || "mi archivo";
		    var a = document.createElement("a");
		    document.body.appendChild(a);
		    a.style = "display: none";
		    return function (data, fileName) {
		       // var json = JSON.stringify(data),
		            blob = new Blob([data], {type: "text/plain"}),
		            url = window.URL.createObjectURL(blob);
		        a.href = url;
		        a.download = fileName;
		        a.click();
		        window.URL.revokeObjectURL(url);
		    };
		}());

		function processFiles(files) {
			var file = files[0];
			fileName =files[0].name;
			var reader = new FileReader();
			reader.onload = function (e) {
				textarea.innerHTML =e.target.result;
				//console.log("hola");
				
			};
			//reader.readAsText(file);
			reader.readAsBinaryString(file);
			
		}

		
		
	</script>
	
</body>
</html>
