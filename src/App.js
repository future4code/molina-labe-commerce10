import React from 'react';
import './App.css';
import styled from 'styled-components';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Filter from './components/Filter';
import Carrinho from './components/Carrinho';

import ImageVenus from './img/venus.jpg'
import ImageMarte from './img/marte.jpg'
import ImageNetuno from './img/netuno.jpg'
import ImageJupiter from './img/jupiter.jpg'
import ImageMercurio from './img/mercurio.jpg'
import ImageSaturno from './img/saturno.jpg'
import ImageUrano from './img/urano.jpg'


const Main = styled.div`
  background-color: #e2e2e2;
  flex-grow: 3;

import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';

const Main = styled.div`
  background-color: #e2e2e2;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
    @media (max-width: 800px){
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: center;
    }
`



const listaProdutos = [
  {
    id: 1,
    nome: "Sputinik",
    preco: 10000,
    imageUrl: "https://picsum.photos/200/200",
  
  },
  {
    id: 2,
    nome: "Vostok",
    preco: 20000,
    imageUrl: "https://picsum.photos/201/200",
 
  },
  {
    id: 3,
    nome: "Apollo 11",
    preco: 30000,
    imageUrl: "https://picsum.photos/203/200",
 
  },
  {
    id: 4,
    nome: "stação Internacional Espacial",
    preco: 30000,
    imageUrl: "https://picsum.photos/204/200",
    
  },
  {
    id: 5,
    nome: "Mars Pathfinder",
    preco: 30000,
    imageUrl: "https://picsum.photos/205/200",
    
  },
  {
    id: 6,
    nome: "Voyager",
    preco: 30000,
    imageUrl: "https://picsum.photos/206/200",
   
  },
  
]



class App extends React.Component {
  state = {
    filtroMinimo:100,
    filtroMaximo:10000000,
    filtroNome: '',
    listaProdutosCarrinho: [
      {
        id: 1,
        nome: "Sputinik",
        preco: 10000,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 2,
        nome: "Vostok",
        preco: 20000,
        imageUrl: "https://picsum.photos/201/200",
        quantidade: 1,
      },
      {
        id: 3,
        nome: "Apollo 11",
        preco: 30000,
        imageUrl: "https://picsum.photos/203/200",
        quantidade: 1,
      },
      {
        id: 4,
        nome: "stação Internacional Espacial",
        preco: 30000,
        imageUrl: "https://picsum.photos/204/200",
        quantidade: 1,
      },
      {
        id: 5,
        nome: "Mars Pathfinder",
        preco: 30000,
        imageUrl: "https://picsum.photos/205/200",
        quantidade: 1,
      },
      {
        id: 6,
        nome: "Voyager",
        preco: 30000,
        imageUrl: "https://picsum.photos/206/200",
        quantidade: 1,
      },
    ]
  } 
    
  

  onChangeFiltroMinimo = (event) => {
    this.setState({filtroMinimo: event.target.value})
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
      nome: "Venus",
      preco: 1000,
      imageUrl: ImageVenus,
      quantidade: 1
    },
    {
      id: 2,
      nome: "Jupiter",
      preco: 130,
      imageUrl: ImageJupiter,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Marte",
      preco: 300,
      imageUrl: ImageMarte,
      quantidade: 1,
    },
    {
      id: 4,
      nome: "Urano",
      preco: 150,
      imageUrl: ImageMercurio,
      quantidade: 1,
    },
    {
      id: 5,
      nome: "Netuno",
      preco: 35,
      imageUrl: ImageNetuno,
      quantidade: 1,
    },
    {
      id: 6,
      nome: "Saturno",
      preco: 350,
      imageUrl: ImageSaturno,
      quantidade: 1,
    },
  ],

  
    listaProdutosCarrinho: [
      {
        id: 1,
        nome: "Venus",
        preco: 1000,
        imageUrl: ImageVenus,
        quantidade: 1
      },
      {
        id: 2,
        nome: "Jupiter",
        preco: 130,
        imageUrl: ImageJupiter,
        quantidade: 1,
      },
      {
        id: 3,
        nome: "Marte",
        preco: 300,
        imageUrl: ImageMarte,
        quantidade: 1,
      },
      {
        id: 4,
        nome: "Urano",
        preco: 150,
        imageUrl: ImageMercurio,
        quantidade: 1,
      },
      {
        id: 5,
        nome: "Netuno",
        preco: 35,
        imageUrl: ImageNetuno,
        quantidade: 1,
      },
      {
        id: 6,
        nome: "Saturno",
        preco: 350,
        imageUrl: ImageSaturno,
        quantidade: 1,
      },
    ],

    produtosFiltrados: [

    ],

  } 
    

  removerProdutoCarrinho = (produtoId) => {
    const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
      if(produto.id === produtoId){
        return {
          ...produto,
          quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto)=> produto.quantidade > 0)
    this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
  }

  AddProdutoCarrinho = (produtoId) => {
    const produtoEstaNoCarrinho = this.state.listaProdutosCarrinho.find(produto => produtoId === produto.id)

    if (produtoEstaNoCarrinho){
      const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
        if(produto.id === produtoId){
          return {
            ...produto,
            quantidade: produto.quantidade +1
          }
        }
        return produto
      })
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    } else {
      const addProdutoNoCarrinho = this.state.listaProdutos.find(produto => produtoId === produto.id)

      const newListaProdutosCarrinho = [...this.state.listaProdutosCarrinho, {...addProdutoNoCarrinho, quantidade:1}]
      
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    }
  }

  ordenar = (novoArrayOrdenado) => {
    this.setState({ listaProdutos: novoArrayOrdenado})
  }

  mudar = (novoArrayFiltrado) => {
    this.setState({ produtosFiltrados: novoArrayFiltrado}) //trazer produtos filtrados
  } 

  render () {

    return (
      <div className = "PaginaInicial">
        <Header />
        <Main>
          <Filter
            listaProdutos={this.state.listaProdutos} 
            produtosFiltrados={this.state.produtosFiltrados} 
            funcao={this.mudar}
            ordenar={this.ordenar}

          />
          
          <Produtos 
            
            listaProdutos={this.state.produtosFiltrados}
            AddProdutoCarrinho={this.AddProdutoCarrinho}/>
            
          <Carrinho
            listaProdutosCarrinho = {this.state.listaProdutosCarrinho}
            removerProdutoCarrinho = {this.removerProdutoCarrinho}
          />
        </Main>
        <Footer />
      </div>
    );  
  }
}

export default App;
=======

export default App;

  onChangeFiltroMaximo = (event) => {
    this.setState({filtroMaximo: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  removerProdutoCarrinho = (produtoId) => {
    const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
      if(produto.id === produtoId){
        return {
          ...produto,
          quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto)=> produto.quantidade > 0)
    this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
  }

  AddProdutoCarrinho = (produtoId) => {
    const produtoEstaNoCarrinho = this.state.listaProdutosCarrinho.find(produto => produtoId === produto.id)

    if (produtoEstaNoCarrinho){
      const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
        if(produto.id === produtoId){
          return {
            ...produto,
            quantidade: produto.quantidade +1
          }
        }
        return produto
      })
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    } else {
      const addProdutoNoCarrinho = listaProdutos.find(produto => produtoId === produto.id)

      const newListaProdutosCarrinho = [...this.state.listaProdutosCarrinho, {...addProdutoNoCarrinho, quantidade:1}]
      
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    }
  }

  render () {

    return (
      <div className = "PaginaInicial">
        <Header />
        <Main>
          <Filtros
            filtroMinimo={this.state.filtroMinimo}
            filtroMaximo={this.state.filtroMaximo}
            filtroNome={this.state.filtroNome}
            onChangeFiltroMinimo={this.onChangeFiltroMinimo}            
            onChangeFiltroMaximo={this.onChangeFiltroMaximo}            
            onChangeFiltroNome={this.onChangeFiltroNome}                  
          />
          <Produtos 
            produtos={listaProdutos}
            filtroMinimo={this.state.filtroMinimo}
            filtroMaximo={this.state.filtroMaximo}
            filtroNome={this.state.filtroNome}
            AddProdutoCarrinho={this.AddProdutoCarrinho}/>
            
          <Carrinho
            listaProdutosCarrinho = {this.state.listaProdutosCarrinho}
            removerProdutoCarrinho = {this.removerProdutoCarrinho}
          />
        </Main>
        <Footer />
      </div>
    );  
  }
}
export default App;

