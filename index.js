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