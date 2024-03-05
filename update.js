const id = new URLSearchParams(document.location.search).get("id");
const name = document.querySelector("input[name='name']");
const desc = document.querySelector("input[name='desc']");
const image = document.querySelector("input[name='image']");

fetch("http://localhost:3000/products/" + id) 
.then((response) => response.json())
.then((data) => {
   name.value = data.name;
   desc.value = data.desc;
   image.value = data.image;
});

const updateForm = document.querySelector("#updateForm");
updateForm.addEventListener("submit", (e) => {
   e.preventDefault();
   let updatePrd = {
      name: name.value,
      desc: desc.value,
      image: image.value,
   };
   fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(updatePrd),
   })
   .then(() => window.location.href = "./index.html");
});