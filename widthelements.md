~~~javascript
$("*").width(function(i,c){
if(c >1349){
console.log("el elemento numero"  + i + "tiene " + c + "pixeles" );
this.style.paddin="0px";
this.style.width="1349px";
console.log(this)
}
})

// version mejorada
$(document).ready(function () {
  console.log("redimencionando elementos mayores al 100%" );
  $("*").width(function(i,c){
  if(c >$('body').width()){

  console.log("el elemento numero"  + i + "tiene " + c + "pixeles" );
  this.style.paddin="0px";
  this.style.margin="0px";
  this.style.width="100%";
  //console.log(this) usar para 
  }
  });
  console.log("redimencionados" );
});
