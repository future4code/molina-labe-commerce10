import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: #0e3558;
    display: flex;
    height: 100px;
`

export default class Footer extends React.Component {
    render(){
        return <FooterContainer>
            <h2>Sobre Nós</h2>
            
            <tr></tr>
            <h4>Loja especializada em Viagens para outro Mundo...</h4>
            <tr></tr>
          </FooterContainer>
    }
} 