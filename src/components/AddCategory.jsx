import { useState } from "react"


//COMPONENTE PARA AÑADIR CATEGORÍA

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');


    //onInputChange: Es una función que se ejecuta cada vez que cambia el valor del input. Toma lo que el usuario escribe en el campo de texto(input como argumento, extrae el valor del input (target.value) y actualiza inputValue con ese valor.
    const onInputChange = ({target}) => {
        setInputValue(target.value) //Esto asegura que cada vez que , el estado del componente se actualiza para reflejar el valor actual del input.
    } 

        /*onSubmit: Es una función que se ejecuta cuando el formulario es enviado (cuando el usuario presiona Enter o envía el formulario de otra manera).*/
    const onSubmit = (event) =>{
        event.preventDefault();//event.preventDefault(): Previene el comportamiento por defecto del formulario, que es recargar la página al enviar.
        if (inputValue.trim().length <=1 ) return; //Esto sirve para que se introduzca más de un carácter en el buscador de gifs
        //setCategories( categories =>[inputValue,...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('') //Esto es para que despues de introducir algo en el buscador, se quede limpio
    } 



  return (
    //Aquí es donde voy a crear un componente especializado para manejar el input
    <form onSubmit={onSubmit}>
        <input
    type="text"
    placeholder="Busca aquí tu gifs"
    value={inputValue} //Enlaza el valor del input con el estado inputValue.
    onChange={onInputChange} // Ejecuta onInputChange cada vez que el usuario escribe en el input, actualizando así el valor del estado. 
    />
    </form>
   

  )
}


