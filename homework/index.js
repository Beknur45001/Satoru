const icon = document.querySelector(".icon");
const search = document.querySelector(".ooo");
const clear = document.querySelector(".clear");
let abaut = document.querySelector(".abaut")

abaut = "Arsen Hello"


icon.onclick = function(){
    search.classList.toggle("active")
}
clear.onclick = function(){
   document.getElementById("search").value = "";
}
