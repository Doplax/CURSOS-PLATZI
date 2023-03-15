const API_URL_FAVOURITE = 'https://api.thecatapi.com/v1/favourites?limit=3&api_key=live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6';
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6';

const spanError = document.getElementById("error");

async function loadRandomMichis(API_URL) {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log("Random");
  console.log(data)

  //En caso de no recibir un http 200 mostraremos el siguiente error:  
  if (res.status !== "200")
  {
    spanError.innerHTML = "Hubo un error " + res.status
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis(API_URL) {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);

  if (res.status !== "200")
  {
    spanError.innerHTML = "Hubo un error " + res.status;
  }
}

async function saveFavouriteMichis() {
  const res = await fetch(API_URL_FAVOURITE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          image_id: "12"
        })
      })
  const data = await res.json()

  console.log("Save");
  console.log(res);

  if (res.status !== "200")
  {
    spanError.innerHTML = "Hubo un error " + res.status;
  }
}




loadRandomMichis(API_URL_RANDOM);
loadFavoritesMichis(API_URL_FAVOURITE);