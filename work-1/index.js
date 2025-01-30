let lol = document.querySelector(".lol")


    let API1 = "https://dummyjson.com/users"


    async function getUser2(){
        

        try {
            const res = await fetch(API1)
            const data = await res.json()
            console.log(data); 


            lol.innerHTML = data.users.map((it) =>{
return `<div class="mm">
<h2>${it.age}</h2>
<h2>${it.height}</h2>
<h2>${it.lastName}</h2>
<h2>${it.company.name}</h2>
    <img class="bbb" src="${it.image}" alt="">

</div>` 

            }).join("")
        } catch (error) {
            console.log(error);
            
        }
        
    }

    getUser2()

    
let lol1 = document.querySelector(".lol1")


    let API = "https://dummyjson.com/products"


    async function getUser(){
        

        try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data); 


            lol1.innerHTML = data.products.map((it) =>{
return `<div class="rrrr">
<h2>${it.price}</h2>
<h2>${it.category}</h2>
<h2>${it.availabilityStatus}</h2>
<h2>${it.title}</h2>
    <img src="${it.thumbnail}" alt="">

</div>` 

            }).join("")
        } catch (error) {
            console.log(error);
            
        }
        
    }

    getUser()

    