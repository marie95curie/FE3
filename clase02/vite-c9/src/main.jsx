//importar react
import React from 'react';
//herramienta para renderizar
import ReactDOM from "react-dom/client";

//COMPONENTE FUNCIONAL
function App() {
    //document.createElement...
    return <h1>Hola, mundo</h1>
}

//INGRESAMOS EL COMPONENTE AL HTML
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);