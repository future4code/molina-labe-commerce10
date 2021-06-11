import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter';
import Produtos from './Components/Produtos';
import Carrinho from './Components/Carrinho';
import { render } from '@testing-library/react';





class App extends React.Component {

  componentDidMount() {
    this.setState({produtosFiltrados: this.state.listaProdutos})

  }


  state = {
    listaProdutos: [
        {
            id: 1,
            nome: "Foguete da Missão Apollo 11",
            preco: 100.0,
            imageUrl: "https://picsum.photos/200/200",
            
        },
        {
            id: 2,
            nome: "venus",
            preco: 10.0,
            imageUrl: "https://picsum.photos/200/200",
            
        },
        {
            id: 3,
            nome: "Foguete ",
            preco: 300.0,
            imageUrl: "https://picsum.photos/200/200",
            
        },
        {
          id: 4,
          nome: "marte",
          preco: 15.0,
          imageUrl: "https://picsum.photos/200/200",
          
      }
    ],

    produtosFiltrados: [

    ],

    // produtosCarrinho: [

    // ]   
}

  ordenar = (novoArrayOrdenado) => {
    this.setState({ listaProdutos: novoArrayOrdenado})
  }

  mudar = (novoArrayFiltrado) => {
    this.setState({ produtosFiltrados: novoArrayFiltrado}) //trazer produtos filtrados
  } 

  // adicionaListaCarrinho = (novaListaCarrinho) => {
  //   this.setState({ produtosCarrinho: novaListaCarrinho})
  // }
  
  render() {
    return (
      <div>
        <Filter listaProdutos={this.state.listaProdutos} 
          produtosFiltrados={this.state.produtosFiltrados} 
          funcao={this.mudar}
          ordenar={this.ordenar}
        />
        {/* <Carrinho produtosCarrinho={this.state.produtosCarrinho}/>  */}
        <Produtos listaProdutos={this.state.produtosFiltrados} 
          produtosCarrinho={this.props.produtosCarrinho}
          adicionaListaCarrinho={this.adicionaListaCarrinho}
        />
      </div>
    
    );
  }
}

export default App;
