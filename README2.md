##The Slap Object Game - Part 2

###Step 1 - The Player Object
- So at this point you have a mostly functional slap game, however its time to refactor and clean up a few problems that could exist. First of all you have a global variable called `health` which is currently being used to control the state of the application. 

To illustrate the problem with a global variable imagine for a moment you are playing an old arcade fighting game. Chances are you have at least two players. Now with just two players it might be easy enough to create two global variable and functions for `player1` and `player2` but what if we are actually playing a game like 

- Double Dragon: 
  - ![Double Dragon](http://nerdemia.com/wp-content/uploads/2016/01/doubledragon.jpg)
- Golden Ax:
  - ![Golden Ax](https://i.ytimg.com/vi/J4tshJrkBw0/hqdefault.jpg) 

Look at all those characters on the screen. Imagine how many global variables you would need to keep track of. There has to be a better way to organize these characters especially when you think about the complexity of each character having their own special moves with unique damage modifiers. 

####Enter Objects
The real challenge of the `SlapGame` is to start thinking about how your data is structured. Going back to a simpler example think about Ken and Ryu from the street fighter game.

![ken-and-ryu](http://k30.kn3.net/taringa/C/3/6/F/5/0/omarlopezsandova/FE4.gif.cover?)

Ken and Ryu although similar in many ways are indeed two unique people. Let's take a look at what these two characters might look like in code.

```javascript
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
```

Looking at these two characters in code its easy to see some basic differences. Ken perhaps is the stronger fighter with more health and stronger basic attacks but Ryu has the upper hand on his special moves and mobility. 

Now our SlapGame may not be as advanced as Street Fighter but we should still strive to practice good coding behaviors by utilizing objects.
