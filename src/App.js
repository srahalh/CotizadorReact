import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';

const Contenedor = styled.div` /* Aqui creo un componente que luego toma valor de la etiqueta header */
    max-width: 600px;
    margin: 0 auto;
`;
const ContenedorFormulario = styled.div` /* Aqui creo un componente que luego toma valor de la etiqueta header */
    background-color: white;
    padding: 3rem;
`;

function App() {

    //Este estado recibe el contenido de Formulario
  const [ resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const { cotizacion, datos } = resumen;


  return (
    <Contenedor>
      <Header
      titulo='cotizador seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos ={datos} //Lo paso vacio porque no necesito el valor de la cotizacion
        />
         <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario> 
     </Contenedor>
  );
}

export default App;
