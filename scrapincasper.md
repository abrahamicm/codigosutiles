~~~javascript
var casper = require('casper').create({
	viewportSize: {
        width: 1200,
        height: 1080
    }
});

// a= document.querySelectorAll('div#leftmenuinnerinner a');
//a.forEach(function(x){console.log(x.href)});
// b=[]
// a.forEach(function(x){b.push(x.href)});


var paginas = [
 'https://www.w3schools.com/php/php_ref_simplexml.asp',
 'https://www.w3schools.com/php/php_ref_string.asp',
 'https://www.w3schools.com/php/php_ref_xml.asp',
 'https://www.w3schools.com/php/php_ref_zip.asp',
 'https://www.w3schools.com/php/php_ref_timezones.asp',
];
casper.start();

paginas.forEach(function(x,index) {
   casper.thenOpen(x, function() {
    	console.log(index);
    	//console.log(document.getElementById('main').innerHTML);
       this.captureSelector(index+'.png', "#main");

    });
});

casper.run();
