const incrementbtn = document.getElementById("incrementbtn");
console.log(incrementbtn);
const decrementbtn = document.getElementById("decrementbtn");
console.log(decrementbtn);
const Resultelement = document.getElementById("result");
const increment = document.getElementById("increment")
console.log(increment);
const decrement = document.getElementById("decrement");
console.log(decrement);
const reset=document.getElementById("reset");
console.log(reset);

let counter =0;

incrementbtn.addEventListener("click",function(){

    console.log("clicking");
    counter = counter +1;
    Resultelement.textContent = counter;
    
});
decrementbtn.addEventListener("click",function(){

    console.log("clicking");
    if(counter>0){
        counter = counter -1;
    }
    Resultelement.textContent=counter;
});
increment.addEventListener("click",function(){
    console.log("clicking");
    counter = counter + 5;
    Resultelement.textContent = counter;
});
decrement.addEventListener("click",function(){

    console.log("clicking");
    counter = counter - 5;
    Resultelement.textContent = counter;
});
reset.addEventListener("click",function(){

    console.log("clicking");
    counter = counter = 0;
    Resultelement.textContent = counter;
});