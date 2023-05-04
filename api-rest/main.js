let api = "live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6"
const MAX_ELEMENTS = "8"
const API_URL_FAVOURITE = `https://api.thecatapi.com/v1/favourites?limit=${MAX_ELEMENTS}&api_key=live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6`;
const API_URL_RANDOM    = `https://api.thecatapi.com/v1/images/search?limit=${MAX_ELEMENTS}&api_key=live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6`;
const API_URL_FAVOTITES_DELETE = (id) =>  `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_SZuu0JOx6kb9uvMjP1hLQrmAFFdUJXSaIkTL8mBaxzFvT6RZ7dj1uExeF6YUeIL6`;


const SPAN_ERROR = document.getElementById("error");


async function loadRandomMichis(API_URL) {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Random");
    console.log(data)
    const randomMichis = document.getElementById("randomMichis");
    randomMichis.innerHTML = "";

    //En caso de no recibir un http 200 mostraremos el siguiente error: (recuerda compararlo con un número, no un string)
    if (res.status !== 200) 
    {
      SPAN_ERROR.innerText = "El error es: " + res.status
    } else {
    
      
    
      data.forEach(element => {
        console.log();
  
        let article = document.createElement("article")
        
        let img = document.createElement("img")
        img.src = element.url
        article.appendChild(img)
        
        let btn = document.createElement("button")
        btn.innerText = "GUARDAR"
        btn.addEventListener("click", () => saveFavouriteMichis(element))
        article.appendChild(btn)
  
        randomMichis.appendChild(article)
      });
    }
}

async function loadFavoritesMichis(API_URL) {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);

  const favoritesMichis = document.getElementById("favoritesMichis");
  favoritesMichis.innerHTML = "";


  if (res.status !== 200)
  {
    SPAN_ERROR.innerText = "El error es: " + res.status
  } else {
    
    
    data.forEach(element => {
      console.log();

      let article = document.createElement("article")
      
      let img = document.createElement("img")
      img.src = element.image.url
      article.appendChild(img)
      
      let btn = document.createElement("button")
      btn.innerText = "BORRAR"
      btn.addEventListener("click", ()=> {deleteMichis(element.id)}) // Estaba mandando el id de la foto, tenia que mandar el id del objeto
      article.appendChild(btn)

      favoritesMichis.appendChild(article)
    });
  }
}

async function saveFavouriteMichis(michi) {
  const res = await fetch(API_URL_FAVOURITE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          image_id: michi.id
        })
      })
  const data = await res.json()

  console.log("Save");
  console.log(data);

  if (res.status !== 200)
  {
    SPAN_ERROR.innerHTML = "Hubo un error " + res.status;
  }
  loadFavoritesMichis(API_URL_FAVOURITE)
}

async function deleteMichis(michi) {
  console.log(API_URL_FAVOTITES_DELETE(michi));
  const res = await fetch(API_URL_FAVOTITES_DELETE(michi),{
    method: 'DELETE'})
      
  const data = await res.json()

  console.log("DELETE");
  console.log(data);

  if (res.status !== 200)
  {
    SPAN_ERROR.innerHTML = "Hubo un error " + res.status;
  }
  loadFavoritesMichis(API_URL_FAVOURITE);
}

async function loadMichis() {
  loadRandomMichis(API_URL_RANDOM);
  loadFavoritesMichis(API_URL_FAVOURITE);
}



window.onload = () => loadMichis();


