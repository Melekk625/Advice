const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Her açıldığında ilk şaka yüklensin
generateJoke();

// Butona tıklandığında şaka yenilensin
jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerText = data.joke;
  } catch (error) {
    jokeEl.innerText = 'Oops! Something went wrong 😅';
  }
}
