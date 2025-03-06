/**
 * Obtiene un GIF aleatorio desde la API de Giphy y lo agrega al DOM.
 * 
 * La función utiliza `async/await` para manejar la solicitud de manera asíncrona.
 * En caso de error, captura y muestra el error en la consola.
 * 
 * @async
 * @function getImageAsync
 * @returns {Promise<void>} - No retorna un valor explícito, pero modifica el DOM agregando una imagen.
 * 
 * @example
 * getImageAsync();
 * Se mostrará una imagen aleatoria en la página
 */
const getImageAsync = async() => {
    try{
        const apiKey = 'AWtr0Hbodg0YJ03Z23uzWAC7j66g5Hlm';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        console.log(url)

    }catch(error){
        console.warn(error);
    }
}

getImageAsync();