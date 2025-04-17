// Start selected All Elements
// Header
let iconHeader = document.querySelector(".header .icon"),
    minuHeader = document.querySelector(".header .minu"),
    closeMinuHeader = document.querySelector(".header .minu .close"),
    searchBottunLargeScreen = document.querySelector(".header .links-big-screen .search"),
    searchBottunSmollScreen = document.querySelector(".header .links .search"),
    searchInput = document.querySelector(".header .input-search"),
    linkHome = document.querySelector(".header .links-big-screen .home"),
    linkSignIn = document.querySelector(".header .links-big-screen .sign-in"),
    linkSignUp = document.querySelector(".header .links-big-screen .sign-up"),
    landingBoxes = Array.from(document.querySelectorAll(".landing .box"));
// End selected All Elements

// Start Decleratiov Var..
// End Decleratiov Var..

// Start header
iconHeader.onclick = function() {
    minuHeader.style.display = "flex";   
}
closeMinuHeader.onclick = function() {
    minuHeader.style.display = "none";   
}
searchBottunLargeScreen.onclick = function() {
    searchInput.classList.toggle("show"); 
    searchInput.focus();  
}
// start click on links home & signin & signup
linkHome.onclick = function() {
    landingBoxes.forEach( (box) => {
        box.classList.remove("active");
    });
    landingBoxes.forEach( (box) => {
        if (box.classList.contains("text")){
            box.classList.add("active");
        }
    });  
}
linkSignIn.onclick = function() {
    landingBoxes.forEach( (box) => {
        box.classList.remove("active");
    });
    landingBoxes.forEach( (box) => {
        if (box.classList.contains("sign-in")){
            box.classList.add("active");
        }
    });  
}
linkSignUp.onclick = function() {
    landingBoxes.forEach( (box) => {
        box.classList.remove("active");
    });
    landingBoxes.forEach( (box) => {
        if (box.classList.contains("sign-up")){
            box.classList.add("active");
        }
    });  
}
// End click on links home & signin & signup
searchBottunSmollScreen.onclick = function() {
    searchInput.classList.toggle("show");
    searchInput.focus();     
}
// Start header