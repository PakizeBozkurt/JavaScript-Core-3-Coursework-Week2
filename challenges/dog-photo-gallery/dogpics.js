let button = document.createElement("button");
let ul = document.createElement("ul");
let li = document.createElement("li");
let img = document.createElement("img");

ul.appendChild(li);
ul.appendChild(button);
document.body.appendChild(ul);

li.appendChild(img);

button.setAttribute("id", "btn");
ul.setAttribute("id", "ul");
li.setAttribute("id", "li");
img.setAttribute("id", "imgs");

button.textContent = "Dog Pictures!";

let buttoN_1 = document.getElementById("btn");
button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })

    .then(function (image) {
      img.src = image.message;
    });
});
