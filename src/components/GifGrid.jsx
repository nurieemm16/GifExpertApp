//Este componente sirve para mostrar los gifs/categoria

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => { //Este componente recibe un objeto de props, del cual extrae category (usando destructuring { category }).

  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando...</h2>) //Esto es una condición de if corta con una sola condición. Si isloading esta en true, es decir, se está cargando, va a ejecutar la segunda parte de la condicion. Si isloading es false, no se va a ejectuar la segunda parte. Es un & lógico
    }
   

    <div className="card-grid">
      
      {
        images.map((image) => (
         <GifGridItem 
          key={image.id}
          title={image.title}
          url={image.url}
          //{...image} con esto esparcimos todas las propiedades de la image, y nos salen todas las propiedades
         />
          ))
      }

    </div>
    </>
    
  )
}

//UseEffect es un hook que sirve para lanzar efectos secundarios. Por efectos secundarios se entiende algún proceso que nosotros queramos ejecutar cuando algo suceda. Por ejemplo cuando la category cambie, quiero disparar un efecto.  Permite realizar efectos secundarios en componentes funcionales, como la ejecución de código cuando el componente se monta, actualiza, o desmonta.
/*Este componente GifGrid hace lo siguiente:

Recibe una categoría (category) como prop.
Declara un estado local images para almacenar los GIFs obtenidos.
Define una función getImages que busca los GIFs usando la función getGifs y luego actualiza el estado con estos GIFs.
Usa el hook useEffect para ejecutar getImages cuando el componente se monta, iniciando así la búsqueda de GIFs.
El estado images (que no se usa en este fragmento, pero sería utilizado en la interfaz) se actualizará con los GIFs obtenidos y podrá ser utilizado para mostrar los GIFs en la interfaz. */
