let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//Fetch Andy's Toys and Add Toy Info to the Card
function getToyData() {
  fetch("http://localhost:3000/toys")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data)
      for (toy of data) {
        const initialDiv = document.getElementById("toy-collection")
        const childDiv = document.createElement("div")
        childDiv.className = "card"
        initialDiv.appendChild(childDiv);

        const h2 = document.createElement("h2")
          h2.textContent = toy.name

        const img = document.createElement("img")
          img.className = "toy-avatar"
          img.src = toy.image

        const p = document.createElement("p")
          p.textContent = toy.likes

        const button = document.createElement("button")
          button.className = "like-btn"
          button.id = toy.id
          button.textContent = "Like ❤️"
          //Increase a Toy's Likes
          button.addEventListener("click", function() {
            console.log("like button was clicked")
            //let likesAsNumber = parseInt(p.textContent, 10)
            //p.textContent = likesAsNumber+= 1
            //PATCH
            //fetch(`http://localhost:3000/toys/${toy.id}`, {
                //method: "PATCH",
                //headers: {
                  //"Content-Type": "application/json",
                  //"Accept": "application/json"
                //},
                //body: JSON.stringify({
                  //name: e.target.name.value,
                  //image: e.target.image.value,
                  //likes: 0,
                //})
                //.then(function (res) {
                  //res.json();
                //})
                //.then(function (data) {

               // })
            //})

  
          });
          
        childDiv.appendChild(h2)
        childDiv.appendChild(img)
        childDiv.appendChild(p)
        childDiv.appendChild(button)
      }
    });
};
getToyData();


//Add a New Toy
const form = document.querySelector('.add-toy-form')

function addNewToy(e) {
  e.preventDefault();
  console.log("submit button was clicked");
   fetch("http://localhost:3000/toys", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify({
       name: e.target.name.value,
       image: e.target.image.value,
       likes: 0,
     })
   })
   .then(function (res) {
     return res.json();
   })
   .then(function (newToy) {
     console.log(newToy)

     initialDiv = document.getElementById("toy-collection")
        childDiv = document.createElement("div")
        childDiv.className = "card"
        initialDiv.appendChild(childDiv);

        h2 = document.createElement("h2")
          h2.textContent = toy.name

        img = document.createElement("img")
          img.className = "toy-avatar"
          img.src = toy.image

        p = document.createElement("p")
          p.textContent = toy.likes

        button = document.createElement("button")
          button.className = "like-btn"
          button.id = toy.id
          button.textContent = "Like ❤️"

        childDiv.appendChild(h2)
        childDiv.appendChild(img)
        childDiv.appendChild(p)
        childDiv.appendChild(button)
   })
   getToyData();
   //This makes sure you don't have to reload the page to see the new data show up on the DOM
}

form.addEventListener("submit", addNewToy)



