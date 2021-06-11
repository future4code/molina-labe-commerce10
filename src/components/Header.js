import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: lightblue;
    display: flex;
    height: 50x;
`

 

export default class Header extends React.Component {
    render(){
        return <HeaderContainer>
     
            <h2>LabECommerce  Viagens espaciais</h2>
           
          </HeaderContainer>
    }
} 
