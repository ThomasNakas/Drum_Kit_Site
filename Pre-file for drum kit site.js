
//calculator exercise practice for callback classes that I will work on Drum Kit Site


function addN(number1,number2){
    return number1+number2;  
  }
  
function sustractN(number1,number2){
    return number1-number2;   
  }
function multiply(number1,number2){
    return number1*number2;  
  }
  
function divide(number1,number2){
    while(number2==0){
        alert("Please give a divider that is not equal to 0");
        number2=prompt("give me a new number:");
    }
    return number1/number2;
    }
  
  function calc(number1,number2,operator){

    operator(number1,number2);
  }