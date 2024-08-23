import React from 'react' // Importa la biblioteca React
import ReactDOM from 'react-dom/client' // Importa la versión de ReactDOM necesaria para manejar la renderización de la aplicación en el navegador. En este caso, se está utilizando la API createRoot, que es una forma moderna de inicializar y montar una aplicación React en el DOM.
import {GifExpertApp} from './GifExpertApp' //Importa el componente GifExpertApp 
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
)


