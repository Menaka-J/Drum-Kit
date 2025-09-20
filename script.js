var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function (event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  switch (key) {
    case "w":
    case "q": // new button same as 'w'
      new Audio("./sounds/tom-1.mp3").play();
      break;

    case "a":
    case "e": // same as 'a'
      new Audio("./sounds/tom-2.mp3").play();
      break;

    case "s":
    case "r": // same as 's'
      new Audio("./sounds/tom-3.mp3").play();
      break;

    case "d":
    case "t": // same as 'd'
      new Audio("./sounds/tom-4.mp3").play();
      break;

    case "j":
    case "y": // same as 'j'
      new Audio("./sounds/snare.mp3").play();
      break;

    case "k":
    case "u": // same as 'k'
      new Audio("./sounds/crash.mp3").play();
      break;

    case "l":
    case "i": // same as 'l'
      new Audio("./sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(key);
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}


// footer 
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== parent) d.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  }
});
document.getElementById("year").textContent = new Date().getFullYear();

