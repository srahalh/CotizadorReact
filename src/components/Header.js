import React from 'react'
import styled from '@emotion/styled'

const ContenedorHeader = styled.header` /* Aqui creo un componente que luego toma valor de la etiqueta header */
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: white;
`;
const TextoHeader = styled.header`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>   
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader> //Esta ContenedorHeader es componente y toma etiquerta header declarada arriba
     );
}
 
export default Header;