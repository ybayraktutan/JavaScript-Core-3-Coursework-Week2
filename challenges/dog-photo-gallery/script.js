/*
Let's make a randomized dog photo gallery!

Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

- Create an `index.html` file that will display your random image
- Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
- When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
- After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
- Incorporate error handling
*/

let button = document.querySelector("button");
button.addEventListener("click", getDogImage);

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw error(`${response.status} ${response.statusText}`);
            }
        })
        .then((data) => {
            let dogList = document.getElementById("dog-list");
            let liElement = document.createElement("li");
            dogList.appendChild(liElement);
            let image = document.createElement("img");
            image.src = data.message
            liElement.appendChild(image);
            
            
        })
        .catch(error => console.log(error))
}
