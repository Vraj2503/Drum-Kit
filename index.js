
//for clicks

var numberofDrums = document.querySelectorAll('.drum').length;

for(i=0; i<numberofDrums; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
    
    //named function
    function handleClick()
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    } 
};    


//for keypresses

    document.addEventListener("keydown", function(event) //nameless or anonymous function
    {                                                       
        makeSound(event.key)                             //Higher Order functions can take functions as input, so addEventListener is HOF
    });

        function makeSound(key)
        {
        switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                
                case "a":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
            break;  
            
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                    
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                    
            default:
                break;
    }   }

 







