

//Mobile Nav

var sideNav = document.getElementById("sideNav")
var hamMenu = document.getElementById("hamMenu")
var menuClose = document.getElementById("menuClose")




hamMenu.addEventListener("click", function () {
    sideNav.classList.replace("right-[-50%]", "right-[0%]");

})

menuClose.addEventListener("click", function () {
    sideNav.classList.replace("right-[0%]", "right-[-50%]");
})


// Product-page Search

var searchInput = document.getElementById("product-search")

var products = document.querySelectorAll('[role="listitem"]');

searchInput.addEventListener("keyup", function (event) {
    var userInput = event.target.value.toLowerCase()

    for (i = 0; i < products.length; i++) {

        var productName = products[i].querySelector("h3").textContent.toLowerCase()

        if (productName.indexOf(userInput) === -1) {

            products[i].style.display = "none"


        }
        else {
            products[i].style.display = "block"

        }





    }
})




