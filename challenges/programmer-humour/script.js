
/*
Who knew programmers could be funny?

Write an function that makes an API call to `https://xkcd.now.sh/?comic=latest`

1. Create a `HTML`, `CSS` and `JavaScript` file to write your code in

- Inside the same file write a program that gets the `json` using Fetch.
- A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
- Log the received data to the console
- Render the `img` property into an `<img>` tag in the DOM
- Incorporate error handling

*/

fetch (`https://xkcd.now.sh/?comic=latest`)
.then((response) => {
    if(response.ok) {
        return response.json()
    } else {
        throw "error"
    }
})
.then ((data) => {
    console.log(data);
    let container = document.getElementById("main")
    let image = document.createElement("img");
    image.src = data.img;
    container.appendChild(image)

})

 .catch(error => console.log(error))