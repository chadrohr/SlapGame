var health = 100;
var slap = 5;
var punch = 10;
var kick = 20;

function onSlap(){
  health -= slap
  update()
  return health
}
function onKick(){
    health -= kick
}

function onPunch(){
  health -= punch
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
  }
  healthElem.innerHTML = health
}

console.log(health)
console.log(onSlap())
  