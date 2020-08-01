var numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML);
     animationButton(buttonInnerHTML);
  });
}


document.addEventListener("keydown",function(){
  makesound(event.key);
   animationButton(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "a":
        var tom1=new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;

        case "s":
          var tom2=new Audio("sounds/tom-3.mp3");
          tom2.play();
          break;

          case "d":
            var tom3=new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;

            case "j":
              var snare=new Audio("sounds/Snare.mp3");
              snare.play();
              break;

              case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;

                case "l":
                  var kick=new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;
                  default:console.log(buttonInnerHTML);
                 }
}

function animationButton(currentKey){

  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
