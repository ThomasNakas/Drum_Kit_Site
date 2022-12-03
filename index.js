var mB=document.querySelectorAll(".drum");//Button array [w,a,s,d,j,k,l]
//detecting button press
for (var i=0; i<mB.length; i++){
        mB[i].addEventListener("click", 
                function (){
                //     alert("I get clicked!");
                    var bIHTML=this.innerHTML; //buttonInnerHTML make the button that I need
                    MakeSound(bIHTML);
                    MakeAnimation(bIHTML);

                }
        
        )
}// anonymous function that call it-self five times

document.addEventListener("keydown",function(event){
        MakeSound(event.key);
        MakeAnimation(event.key);
        // console.log(event);

})

function MakeSound(key){
        // this.key=KeyboardEvent.key;
        // switch (key) {
        //         case value:
                        
        //                 break;
        
        //         default:
        //                 break;
        // }
        switch(key){
                case("w") :
                        var tom1= new Audio('sounds/tom-1.mp3');
                        tom1.play();
                        break;
                case("a") :
                        var tom2= new Audio('sounds/tom-2.mp3');
                        tom2.play();
                        break;
                case("s") :
                        var tom3= new Audio('sounds/tom-3.mp3');
                        tom3.play();
                        break;
                case("d") :
                        var tom4= new Audio( 'sounds/tom-4.mp3');
                        tom4.play();
                        break;
                case('j') :
                        var snare= new Audio ('sounds/snare.mp3');
                case ('k') :
                        var kickBass= new Audio('sounds/kick-bass.mp3');
                        kickBass.play();
                        break;
                case("l") :
                        var crash= new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                default:
                        console.log( `the ${key} is not valid please chose between the \" w, a, s, d, j, k, l\"`);
                        break;
                
                }
        }

        function MakeAnimation(aK){ // activeKey Variable
           var aB = document.querySelector(`.${aK}`); //activeButton=aB
           aB.classList.add("pressed");
           setTimeout(function(){
                aB.classList.remove("pressed")},150);
           //hEV.className+=`pressed`;
           }
//  An Aleternative loop for this example
// var j=0;
// while (i<mB.length){


// mB[i].addEventListener("click",function () { alert("I've got clicked");})

//     i++
// }
    