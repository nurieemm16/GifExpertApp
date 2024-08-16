//rafc para generar rápidamente un componente funcional en React con una estructura básica

import { useState } from "react"; //useState es un Hook de React que permite agregar estado a los componentes funcionales. El estado es una forma de almacenar y gestionar información que puede cambiar durante la ejecución de un componente. Cada vez que el estado cambia, React vuelve a renderizar el componente para reflejar esos cambios.
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    //Cuando nosotros queremos almacenar información y esa información tiene que cambiar el HTML, utilizaremos Hooks para mantener el estado. Las categories seran tipo The Office, Peaky Blinders, etc
    const [categories, setCategories] = useState(['The Office']); // Aquí se está utilizando el Hook useState para crear una variable de estado llamada categories.

    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory) ) return;//Para comprobar si la categoria que introduce el cliente ya está dentro de categorias. Si ya está dentro de las categories, hace return y sale de la función

        setCategories([newCategory,...categories ]) //aquí usamos setCategories para modificar el estado de categories, haciendo spread(para que aparezcan todas las categorias + nueva categoria)
          
    }
    

  return (
    <>
  
    <h1>GifExpertApp</h1>

   
   <AddCategory 
  onNewCategory={value => onAddCategory(value)} //onNewCategory es una prop de mi componente
   /> 

   
        {
        categories.map( (category)=> ( 
            <GifGrid key={category} category={category}/> // Se pasa category como una propiedad al componente GifGrid. Esto le permite al componente GifGrid saber qué categoría está procesando.
        ))

        }
    
       
    </>
  )
}


//Se debe agregar una key única a cada elemento en una lista <li></li>renderizada por React. Esto es importante para que React pueda manejar las actualizaciones del DOM de manera eficiente y evitar comportamientos inesperados en la interfaz de usuario.

/* **{/*Aquí, el componente GifExpertApp está pasando la función setCategories como una prop llamada setCategories al componente AddCategory.
setCategories es la función que viene del useState en GifExpertApp. Esta función se utiliza para actualizar el estado de categories (que es una lista de categorías como 'The Office', 'Peaky Blinders', etc.).
Al pasar esta función como prop, le das a AddCategory el poder de actualizar la lista de categorías en GifExpertApp. Es decir, cuando el usuario agregue una nueva categoría en AddCategory, esa categoría se puede agregar al estado categories en el componente principal GifExpertApp.
¿Por Qué Pasar setCategories?
Pasar setCategories como prop es esencial para que los componentes hijos puedan interactuar con el estado del componente padre. En este caso:
AddCategory  incluye un formulario donde el usuario puede escribir el nombre de una nueva categoría.
Cuando el usuario envía el formulario, AddCategory puede llamar a setCategories con el nuevo valor de categoría, actualizando el estado categories en GifExpertApp.
Esto, a su vez, hará que GifExpertApp se re-renderice y muestre la nueva lista de categorías, incluyendo la recién agregada. */

