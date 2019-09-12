//Creating Tabs to showcase work
// declare global variables that hold all the links and all the panel elements
function openPanel(evt, tabName) {
    var i, tabPanel, tabLink;
    tabPanel = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabPanel.length; i++) {
      tabPanel[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Creating top navigation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
*/

// Automatic slideshow of images - change image every 3 seconds
var carouselIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("slides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  carouselIndex++;
  if (carouselIndex > x.length) {carouselIndex = 1}
  x[carouselIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}








//window.onload = function() {
    
//  displayPanel(tabLinks[0]); // set initial panel state
    // this is the event listener to links using onclicks and onfocus, to fire the displayPanel function, and to return false to diable the link
//    for (var i=0; i < tabLinks.length; i++){
//        tabLinks[i].onclick = function() {
//            displayPanel(this);
//            return false;
//        }
//        tabLinks[i].onfocus = function() {
//            displayPanel(this);
//            return false;
//        }
//    }
//}
//function displayPanel(tabToActivate) {
    // go through all the li elements
//    for (var a=0; a < tabLinks.length; a++) {
//        if (tabLinks[i] == tabToActivate) {
            // if it's the one to activate, change its class
//            tabLinks[i].classList.add("activate");
            // display the corresponding panel (css lol) "block" will show it, "none" will not show
//            tabPanels[i].style.display = "block";
//        } else {
            // remove the active class on the link
//            tabLinks[i].classList.remove("activate");
            // hide the panel
//            tabPanels[i].style.display = "none";
//        }
//    }
//}