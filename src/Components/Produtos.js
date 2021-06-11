import React from 'react'
import styled from "styled-components";
import Carrinho from './Carrinho';


const ContainerProdutos = styled.div `
    

`

const TituloProduto = styled.p `
    

`

const ContainerCardProduto = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    background-color: rgb(255, 255, 255);
    width: 210px;
    margin: 10px;
    height: 350px;
`
const ValorProduto = styled.p`

`

const ImagemCard = styled.img`
    

`

const ButtonAdicionar = styled.button`
    background-color: #4CAF50;
    color: white;
    width: 95px;
    height: 35px;
    font-size: 15px;
    border-style: outset;
    border-color: #4CAF50;
    margin-bottom: 15px;

    &:hover {
        transform: scale(1.3);
        transition: all 0.5s;
        cursor: pointer;
    }


`
export default class Produtos extends React.Component {

    
  onChangeClickAdicionar =(produtoId) => {
    const listaProdutosAdicionados = this.props.listaProdutos.filter((produto) => {
      return (produto.id === produtoId)
    })

    
    // this.props.adicionaListaCarrinho(this.listaProdutosAdicionados)
  }

   
      render() {
      const produtosLista = this.props.listaProdutos.map((produto) => {
        return (
          <ContainerCardProduto>
            <ImagemCard src={produto.imageUrl}/>
            <TituloProduto> {produto.nome}</TituloProduto>
            <ValorProduto> R$ {produto.preco} </ValorProduto>
            <CarrinhoButton onClick={() => this.props.AddProdutoCarrinho(produto.id)}> Adicionar</CarrinhoButton>
            
          </ContainerCardProduto>
        )
      })
      

        return (
            <ContainerProdutos>
                <p>Quantidade {produtosLista.length} </p>
                {produtosLista} 
            </ContainerProdutos>
        )
    }
}