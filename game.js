var health = 100;
var slap = 1;
var punch = 10;
var kick = 20;
var players = {}
function Players(name, health,slap, punch, kick){
    this.name = name;
    this.health = health;
    this.slap = slap;
    this.punch = punch;
    this.kick = kick;
    this.draw = function(){

    }
}
var Players = {
    Player1: new 
}
function Items(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){

    }
}
var Items = {
    sheild:new Item("Shield", 1, 'That was a blocked')
}

function onSlap(){
  health -= slap
  update()
  return health
}
function onPunch(){
  health -= punch
  update()
  return health
}
function onKick(){
    health -= kick
    update()
    return health
}
function onReset(){
    health = 100
    update()
    return health
}
function update(){
  var healthElem = document.getElementById('health')
  if(health <= 0 ){
      health = 0
 // }else{
 //     if(health <= 20){
          //change color to red
      }
  }
  healthElem.innerHTML = health
}

//console.log(health)
//console.log(onSlap())
  