const apiKey = 'AWtr0Hbodg0YJ03Z23uzWAC7j66g5Hlm';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Promesas en cadena 
peticion
    .then( response => response.json())
    .then(({data}) => {
        const {url} = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn);