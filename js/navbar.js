//Navbar scripts

//
// Change on scroll
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1) {
    document.getElementById("NavContainer").classList.add("navbar-container-active")
    document.getElementById("Navbar").classList.add("navbar-active");
  } else {
    document.getElementById("NavContainer").classList.remove("navbar-container-active");
    document.getElementById("Navbar").classList.remove("navbar-active");
  }
}