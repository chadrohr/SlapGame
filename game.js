//  var health = 100;
// var slap = 1;
// var punch = 5;
// var kick = 10;

//var Players = {}
function Players(name, health, slap, punch, kick, block){
    debugger
    this.name = name;
    this.health = health;
    this.slap = slap;
    this.punch = punch;
    this.kick = kick;
    this.block = block; 
}
var player1 = new Players('Black Knight', 100, 1, 3, 5, 5);
// function Items(name, modifier, description){
//     this.name = name;
//     this.modifier = modifier;
//     this.description = description;
//     this.draw = function(){

//     }
// }
// var Items = {
//     sheild:new Item("Shield", 1, 'That was a blocked')
// }

function onSlap(){
  Players.health -= Players.slap
  update()
  return health
}
function onPunch(){
  Players.health -= Players.punch
  update()
  return health
}
function onKick(){
    Players.health -= Players.kick
  update()
  return health
}
function onBlock(){
    Players.health += Players.block
  update()
  return health
}
function onReset(){
    Players.health = 100
    document.getElementById('health').style.color= "white";
    update()
    return health;
}
function update(){
 var healthElem = document.getElementById('health');
  { 
    if(health <= 20){
    document.getElementById('health').style.color= "red";  
      }
      if(health <= 0 ){
     health = 0
 } 
    healthElem.innerHTML = health;
}
}

  