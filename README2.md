The Slap Object Game - Part 2

Step 1 - The Player Object

So at this point you have a mostly functional slap game, however its time to refactor and clean up a few problems that could exist. First of all you have a global variable called health which is currently being used to control the state of the application.
To illustrate the problem with a global variable imagine for a moment you are playing an old arcade fighting game. Chances are you have at least two players. Now with just two players it might be easy enough to create two global variable and functions for player1 and player2 but what if we are actually playing a game like

Double Dragon:
Double Dragon
Golden Ax:
Golden Ax
Look at all those characters on the screen. Imagine how many global variables you would need to keep track of. There has to be a better way to organize these characters especially when you think about the complexity of each character having their own special moves with unique damage modifiers.

Enter Objects

The real challenge of the SlapGame is to start thinking about how your data is structured. Going back to a simpler example think about Ken and Ryu from the street fighter game.

ken-and-ryu

Ken and Ryu although similar in many ways are indeed two unique people. Let's take a look at what these two characters might look like in code.

var ken = {
  health: 120,
  attacks: {
    kick: 20,
    punch: 15,
    uppercut: 30,
    hadouken: 40
  },
  mobility: 35
}

var ryu = {
  health: 100,
  attacks: {
    kick: 15,
    punch: 10,
    uppercut: 25,
    hadouken: 60
  }
  mobility: 55
}
Looking at these two characters in code its easy to see some basic differences. Ken perhaps is the stronger fighter with more health and stronger basic attacks but Ryu has the upper hand on his special moves and mobility.

Now our SlapGame may not be as advanced as Street Fighter but we should still strive to practice good coding behaviors by utilizing objects.

Constructing our Fighters

Now you could of course create characters using an object literal {} but it might make more sense to create a constructor that we can use to create many characters easily. We could also then take advantages of prototypes to add basic attack functions for each of the characters without having to write each function for every player.

Player.prototype.punch = function(target){
  target.health -= this.attacks.punch
}
See how the above function would allow for each characters unique damage modifiers to be used against their target.

Warning Refactoring will break your code.... But its okay. Don't be afraid to break things.

Now work on converting your global variables to properties that can be used through a Player constructor. This will make it so you have to update your code in your update function to something like player.health

Step 2 - JS - Health Condition

We are now going to add a component that changes the color of the background when the player's health drops below a certain threshold. We will need to use a conditional statement to determine the health.
inside the update() function add an if statement
    if("[PlayerHealth]" <= 0){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
When the player's health drops below zero, the panel should turn red.
Step 3 - Items

It's now time to add items to our game. Items are objects that will be created using a constructor. the items are responsible for reducing the damage done to the player on hit.
Create an Item constructor that takes in the following "options": (name, modifier, description).
The Item should have 3 properties: name, modifier, description.
Add an empty draw method to the Item.
Your constructor should look like the one below.
var Obj = function(option1, option2, option3){
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.draw = function(){
     //...
    }
}
Step 4 - Create the items

Since our game will have multiple items, we need to find an easy way to access them. We can use an array to store a collection of objects. However, arrays are not always the easiest to use, because they require us to loop over the entire collection when we are looking for a specific item. What if we instead, create an object that uses the name of the item as a property?
Create an object called items.
following the example below, add 2 more items.
var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    ...
    ...
}
We can now easily reference the shield item by calling items.shield.
What would items.shield.name return?
Step 5 - Give some items to our player.

We are using an object to store the master list of items in our game. However, we need to be able to give our player items. In this case, we need to use an array, because it may be possible for the player to have multiples of the same item.
Create an array property named items on the player object.
Place the shield in the first index of the items array.
 items:[items.shield]
keep in mind that the [items] object that is global, is completly different than the [items] array on the player.
Step 6 - REDUCE THE DAMAGE!... almost

How are you at math?
create a function on the player object called, addMods().
using a "for i loop", calculate the combined value of modifiers in the player.items array.
this may be tricky, but think it through before reading the following hints. ##HINTS
we need to create a variable to hold the running modifier total.
this variable should be outside of the loop.
inside the loop, increase the running total by the 'current items modifier'
arrays need to be accessed by index. [i]
have the function return the total.
Step 7 - REDUCE THE DAMAGE!... for real this time.

before you begin this step, try to solve the problem... without the help from a mentor. Remember math in javascript is the same as on paper. Order of operations matters: 5 * .3 = 1.5
stuck?
look at the hit function()
total damage done = damage * [sum of all modifiers]
did you get it! I think the following works
this.health -= damage * this.addMods();
UPSHIFT CHALLENGE

Add this to the body of the item.draw method.
    return '<div class="item">'+ this.name +'</div>';
Create a drawItems method under the update() function. Have the update() function call the drawItems() function. retrieve from the DOM the element id = "player-items" set the innerHTML of the element equal to a concatenation of all the items.draw() results.

Add to the UI a way to give your player items.
