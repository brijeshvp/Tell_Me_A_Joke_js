// changeJoke will simply reload the page(using button)
let changeJoke = () => {
    location.reload();
  }
  let jokeBtn = document.getElementById("newJoke");
  jokeBtn.addEventListener('click',changeJoke);
  
  let url = "https://official-joke-api.appspot.com/random_joke";
  
  let res = fetch(url);
  
  res.then((response) => {
    return response.json();
  }).then((json) => {
    jokeNo.innerHTML = json.id;
    jokeQ.innerHTML = json.setup;
    jokeA.innerHTML = json.punchline;
    // console.log(json.id);
    // console.log(json.setup);
    // console.log(json.punchline);
  })