// <!-- Mobile navbar -->
// <nav id="sideNav" class="bg-green-100 w-[50%] h-dvh fixed z-10 top-0 right-[-50%]">
//     <div class="p-5 text-right" aria-label="close" id="close"><p>X</p></div>
//     <ul class="flex flex-col gap-5 text-gray-600 md:hidden">
//         <li>
//             <a class="hover:underline hover:text-black" href="./index.html">Home</a>
//         </li>
//         <li>
//             <a class="hover:underline hover:text-black" href="./product.html">Product</a>
//         </li>
//         <li>
//             <a class="hover:underline hover:text-black" href="./contact.html">Contact</a>
//         </li>
//     </ul>
// </nav>

var sideNav = document.getElementById("sideNav")
var hamMenu = document.getElementById("hamMenu")
var menuClose = document.getElementById("menuClose")




hamMenu.addEventListener("click", function () {
    sideNav.classList.replace("right-[-50%]", "right-[0%]");

})

menuClose.addEventListener("click", function () {
    sideNav.classList.replace("right-[0%]", "right-[-50%]");
})