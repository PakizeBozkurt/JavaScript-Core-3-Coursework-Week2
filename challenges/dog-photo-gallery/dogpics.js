fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(res => {
const dogUl = document.createElement("ul");
const dogLi = document.createElement("li");
dogLi.appendChild(dogUl);
const imgUl = document.createElement("img");
imgUl.src = res.message;
})



