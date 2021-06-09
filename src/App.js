import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter';
import Produtos from './Components/Produtos'

function App() {
  return (

    <div>
      <Filter>
        <Produtos></Produtos>
      </Filter>
      <p>oii</p>
    </div>
    // <CardProduto>
    //   <Filter></Filter>
    //   <Carrinho></Carrinho>
    //   <p> hello</p>
    // </CardProduto>
  );
}

export default App;
