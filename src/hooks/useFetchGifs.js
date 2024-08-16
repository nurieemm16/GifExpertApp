import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Esto es un customhook, es un hook que se crea desde 0. Esta hecho de forma que nosotros nos podamos ahorrar de escribir mucho código y lógica.Se podrá utilizar en otros hooks. 

export const useFetchGifs = (category) => {
   //crearemos un estado local para mantener los gifs. Y este estado también se mantiene cuando se redibuja el componente
   const [images, setImages] = useState([])
   const [isLoading,setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs(category); //Llama a la función getGifs con la categoría como argumento.Espera a que la función getGifs termine de ejecutar y devuelva un array de GIFs. Este array se almacena en la variable newImages.
    setImages(newImages); //Actualiza el estado images con el array de GIFs que se obtuvo (newImages). Esto permite que las imágenes estén disponibles para ser renderizadas en el componente.
    setIsLoading(false)
}


  useEffect( ()=> {
    getImages(); //Esto inicia la búsqueda de GIFs basados en la categoría cuando el componente se monta. La función getImages obtiene los GIFs y actualiza el estado images con los resultados.
  },[])
  
  
    return { //devuelve un objeto
        images,
        isLoading
        }
   
  
}


