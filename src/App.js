import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import saturno from './img/Saturn_during_Equinox'

export const Grid = styled.div`display:grid;
`;

export const imageSaturno= styled.img`
width:2%;
`

imageSaturno.defaultProps ={
  src:saturno,
}

export const Row = styled.div`
display:flex;
`;











class App extends React.Component{
state={
  produtos:[{
    id:1,
    quantidade:1,
    produto:"Viagem a Saturno",
    preço: 5000
  },
{
  id:2,
  quantidade:1,
  produto:"Viagem a Marte",
  preço: 3000

}]
}


AddProdutos =() =>{
 const listaDeProdutos = this.state.produtos
}

render(){
return(
  <Grid>
  <Row>
    <h1>Produtos</h1>
    <image />
  </Row>
  </Grid>
)
}
}







export default App;
