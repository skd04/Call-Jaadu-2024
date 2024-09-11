// Create Click Function.
function makeSound(key) {
    switch (key) {
      case "w":
        var w = new Audio("Sounds/JAADU1.mp3");
        w.play();
        break;
      case "a":
        var a = new Audio("./Sounds/JAADU2.mp3");
        a.play();
        break;
      case "s":
        var s = new Audio("./Sounds/JAADU3.mp3");
        s.play();
        break;
      case "d":
        var d = new Audio("./Sounds/JAADU4.mp3");
        d.play();
        break;
      case "k":
        var k = new Audio("./Sounds/JAADU9.mp3");
        k.play();
        break;
      case "l":
        var l = new Audio("./Sounds/JAADU10.mp3");
        l.play();
        break;
      default:
        console.log("Invalid key:", key);
    }
  }

// Store the Number Drum Buttons
var numKeys = document.querySelectorAll(".keys").length;

// Use for loop to
for (var i = 0; i < numKeys; i++) {
  // Make buttons clickable.
  document.querySelectorAll(".keys")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// Make key friendly.
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Add Key pressing animation. For that we need to create a function.
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  // Remove the 'pressed' class after 100 milliseconds
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 120);
}
