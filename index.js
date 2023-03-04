const featuresContent = document.querySelector("#features-content");
const button = document.getElementById("features-button");
const arrowUp = document.getElementsByClassName("icon-arrow-up")[0];
const arrowDown = document.getElementsByClassName("icon-arrow-down")[0];

function dropdown(){
    featuresContent.classList.toggle("none"); //adds and removes none from the class list
    arrowDown.classList.toggle("none");
    arrowUp.classList.toggle("none");

}


button.addEventListener("click", function(e){
    e.stopPropagation(); //Not sure if this is useful but it prevents the function of the button element from being passed down to the parent element, thus stopping the function from running twice
    dropdown();
});


const companyContent = document.querySelector("#company-content");
const companyButton = document.getElementById("company-button");
const companyArrowUp =document.getElementsByClassName("icon-arrow-up")[1];
const companyArrowDown = document.getElementsByClassName("icon-arrow-down")[1];

function companyDropDown(){
    companyContent.classList.toggle("none");
    companyArrowDown.classList.toggle("none");
    companyArrowUp.classList.toggle("none");
}
companyButton.addEventListener("click", function(){
    companyDropDown();
});

//Menu button functionality
const menuIcon = document.getElementById("menu-icon-button");
const sideNav = document.getElementById("nav");
const iconClose = document.getElementById("icon-close-menu-button");

menuIcon.addEventListener("click", menuButton);

function menuButton(){
    sideNav.style.width = "65%"; // adds width to the side nav
    iconClose.style.display = "block"; //shows the menu close button
}

//Does the opposite of menuButton function
iconClose.addEventListener("click", closeMenu);

function closeMenu(){
    sideNav.style.width = "0";
    iconClose.style.display = "none";
}