<<<<<<< HEAD
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
    */
}


// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor= title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

function init(){
    title.addEventListener("click", handleClick);
}

init();

// function handleOffline(){
//     console.log("lalalala");
// }

// function handleOnline(){
//     console.log("welcome back");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);
=======
const calculator = {
  plus: function(a, b){
    return a+b;
  },
  sub: function (a, b){
    return a-b;
  },
  mul: function (a, b){
    return a*b;
  },
  div: function (a, b){
    return a/b;
  },
  pow: function (a, b){
    return a**b;
  }
}

const plus = calculator.plus(5, 6);
const sub = calculator.sub(10,4);
const mul = calculator.mul(3,4);
const div = calculator.div(6,2);
const pow = calculator.pow(2,3);

console.log(plus)
console.log(sub)
console.log(mul)
console.log(div)
console.log(pow)
>>>>>>> 83a8dba30d354725be56dc0c6cff2a6b0f1a04d1
