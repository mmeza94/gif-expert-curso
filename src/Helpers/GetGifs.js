

//Es buena practica tener fuera la definicion de la funcion porque nuestro componente asi no va  a estar reprocesando la funcion
 export const GetGifs = async (category) => {
    const Url = `https://api.giphy.com/v1/gifs/search?api_key=angrao2R3ZXvS9ouhZfTCDO3uHfndE4w&q=${ category }&limit=20`;
    const response = await fetch(Url);

    //Para asegurarse que es un arreglo la data
    const { data = [] } = await response.json();


    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        url : img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}