

//whileLoop task
//let n = 10;
function whileLoop(n){


while (n>0){
  console.log(--n);
  if (n ===0){
    return ("done");
}
}}

//doWhileLoop

function doWhileLoop (array){
  
  var i = 0;
  function incrementVariable(){
    i = i+1;
  }
  do{
    array.splice(0, 1);
    
  }while (array.length > 0 && incrementVariable());
  return array;
}

//new forLoop

var array = [];
function forLoop(array){
  
for(let i=0; i<25; i++){
    if (i===1){
    array.push("I am 1 strange loop.");
  }
  else{
    array.push(`I am ${i} strange loops.`)
  }
  
  
}return array;
}

