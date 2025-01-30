    let box = document.getElementById("box")
    let lol = document.getElementById("lol")
    let result = document.getElementById("result")


    function sendMessage() {
        result.innerHTML = box.value ;

        result.style.width = "200px"
        result.style.height = "150px"
        // result.style.backgroundColor = "green"
        // result.style.borderRadius = "25px"
         result.style.paddingLeft = "35px"
        result.style.paddingTop = "65px"
        result.style.marginLeft = "120px"
        result.style.marginTop = "12px"

        let numbers = box.value


        if (numbers.slice(1, 4) == 700 || numbers.slice(1, 4) == 500 ) {
            result.textContent = `0!`;
        result.style.backgroundColor = "tomato"
        result.style.borderRadius = "50%"


          } else if (numbers.slice(1, 4) == 777) {
            result.textContent = `Bilain`;
        result.style.backgroundColor = "yellow"
        result.style.borderRadius = "0 70px 0 70px"

          } else if(numbers.slice(1, 4) == 550){
            result.textContent = `MegaCom`;
        result.style.backgroundColor = "purple"
        result.style.borderRadius = "25px"
        
          }

          box.value = ""
    }
    lol.onclick = sendMessage

    //-----------------------------------------------------------------

    let bob = document.getElementById("bob")
    let lok = document.getElementById("lok")
    let did = document.getElementById("did")


    function diidi(){
      did.innerHTML = bob.value ;
        
      let dii = bob.value
      
      if (dii === "") {
        did.textContent = "Сураныч, атыңызды жазыңыз";
        did.style.color = "red"
         did.style.marginLeft = "125px"
        did.style.marginTop = "20px"
      } else {
        did.textContent = `Салам ${dii}...`;
        did.style.marginLeft = "170px"
        did.style.marginTop = "20px"
        did.style.color = "green"
      }


      bob.value = ""
    }
    lok.onclick = diidi