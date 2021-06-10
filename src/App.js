import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';


export const Colunas= styled.div`
display:flex; 
justify-content: space-between;
`;

export const Funções = styled.div`
padding:2rem;
background-color:purple;
color:solid white;
margin-top:5rem;
`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const Header = styled.li`
display: flex;
justify-content: space-around;
margin-right: 16px;
`;

export const anchor = styled.a`
color: black;
list-style: none;
`;

export const Name = styled.a`
 color :purple;
 list-style: none;
`;

class App extends React.Component{
state={
  produtos:[{
    id:1,
    quantidade:1,
    produto:"",
    preço: "1000"
  },
{
  id:2,
  quantidade:1,
  produto:"",
  preço: ""
}],
carrinho:""
}



render(){
  return(
    <div>
      <HeaderContainer>
        <anchor>Labe-Commerce</anchor>
        <Header>
        <ul>
          <anchor href="#">
        Contato
        </anchor>
        </ul>
        <ul>
          <anchor href="#">
          Produtos
          </anchor>
        </ul>
        <ul>
          <anchor href="#">
        Sobre
        </anchor>
        </ul>
        </Header>
      </HeaderContainer>
    <Colunas>
    <Funções><h1>Refil</h1>
    <p>Valor Màximo</p>
    <input type="text"></input>
    <p>Valo Mínimo</p>
    <input type="text"></input>
    <p>Nome do produto</p>
    <input type="text"></input>
    </Funções>
    <Funções><h2>Produtos</h2></Funções>
    <Funções><h3>Carrinho</h3></Funções>
   </Colunas>
   </div>
)
}
}







export default App;
