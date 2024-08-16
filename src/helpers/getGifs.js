export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uJVmyfiOfSkn2AYAZs0oJLXXvHNHz94D&q=${ category }&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json(); //la data viene con las imagenes de los gifs
    const gifs = data.map(img => ({ //Crea y retorna un nuevo array llamado gifs, donde cada elemento es un objeto con las propiedades id, title, y url.
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
