const btnEl = document.getElementById("btn")
const jokeE1 =document.getElementById("joke")

const apiKey ="3GRvVDbgZ8zenSIjiLRsYg==5OvRAK7tWHWKNXN0";

const options = {
    method:"GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getjoke() {
    try {
        jokeE1.innerText = "Updating.....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading.....";
        const response = await fetch(apiURL,options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText ="Tell Me A Joke";

    jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "An Error Happened , Please Check Your Connection";

        btnEl.disabled = false;
        btnEl.innerText ="Tell Me A Joke";
        console.log(error);
    }
    
}

btnEl.addEventListener("click",getjoke)