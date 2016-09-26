//  var health = 100;
// var slap = 1;
// var punch = 5;
// var kick = 10;

//var Players = {}
function Players(name, health, slap, punch, kick, block){
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
  function play(){
       var audio = document.getElementById("audio2");
       audio.play();
                 }
  player1.health -= player1.slap
  play()
  update()
  return health
}
function onPunch(){
  player1.health -= player1.punch
  update()
  return health
}
function onKick(){
    player1.health -= player1.kick
  update()
  return health
}
function onBlock(){
    function play(){
        var audio = document.getElementById("audio3");
        audio.play();
                 }
    player1.health += player1.block
  play()
  update()
  return health
}

function onReset(){
    player1.health = 100
    document.getElementById('health').style.color= "white";
    function play(){
       var audio = document.getElementById("audio1");
       audio.play();
                 }
    update()
    play()
    return health;
}
function update(){
 var healthElem = document.getElementById('health');
  { 
    if(player1.health <= 20){
    document.getElementById('health').style.color= "red";  
      }
     if(player1.health > 20){
    document.getElementById('health').style.color= "white";  
      } 
      if(player1.health <= 0 ){
     player1.health = 0
 } 
    healthElem.innerHTML = "Player 1's Health " + player1.health;
}
}

  