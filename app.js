console.log("Let's get this party started!");
const input = $('#input');
const div = $('#gif-container');

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let newImg = document.createElement("img");
        newImg.src = res.data[randomIdx].images.original.url;
        div.append(newImg);

    }
}

$("form").on("submit", async function (e) {
    e.preventDefault();
    let key = input.val()
    const url = `http://api.giphy.com/v1/gifs/search?q=${key}&api_key=teRLisqXkS7l9uG3B65FuGhIomkRLZia`;
    const response = await axios.get(url);
    addGif(response.data);
})

$('#newImg').on("click", function () {
    newImg.remove();
})
