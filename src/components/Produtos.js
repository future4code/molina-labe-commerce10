import React from 'react'
import styled from 'styled-components'



const ContainerProdutos = styled.div `
   display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 20px;
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
    margin: 5px;
    height: 350px;
`
const ValorProduto = styled.p`

`

const ImagemCard = styled.img`
    width: 100%;
    height: 200px;
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

const Quantidade = styled.p `
  /* background-color: blue; */

  margin-right: 28px;
  margin-top: 25px;
  display: flex;
  justify-content: end;
  

`
export default class Produtos extends React.Component {


   
      render() {
      const produtosLista = this.props.listaProdutos.map((produto) => {
        return (
          <ContainerCardProduto>
            <ImagemCard src={produto.imageUrl}/>
            <TituloProduto> {produto.nome}</TituloProduto>
            <ValorProduto> R$ {produto.preco} </ValorProduto>
            <ButtonAdicionar onClick={() => this.props.AddProdutoCarrinho(produto.id)}> Adicionar</ButtonAdicionar>
             
          </ContainerCardProduto>
        )
      })
      

        return (
            <div>
                <Quantidade>Quantidade: {produtosLista.length} </Quantidade>
                 <ContainerProdutos>{produtosLista} </ContainerProdutos>
            </div>
        )
    }
}

// AddProdutoCarrinho={this.props.AddProdutoCarrinho}