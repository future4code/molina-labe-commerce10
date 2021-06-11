import React from 'react'
import styled from 'styled-components';
import ItensCarrinho from './ItensCarrinho';

const CarrinhoContainer = styled.div`
  background-color:#e2e2e2 ;
  
  height: 1000px;
  width: 600px;
  justify-content: space-around;
  align-items:center;
  text-align: center;
  border:solid 1px black;
p {
    margin-top: 40px;
}
`

export default class Carrinho extends React.Component {

    ValorTotal = () => {
        let valorTotal = 0

        for (let produto of this.props.listaProdutosCarrinho){
            valorTotal += produto.preco*produto.quantidade
        }
        return valorTotal
    }

    render(){
        return (<>
            <CarrinhoContainer>
                <h2>Carrinho</h2>
                    {this.props.listaProdutosCarrinho.map((produto) => {
                        return <ItensCarrinho 
                                produtosCarrinho = {produto}
                                removerProdutoCarrinho = {this.props.removerProdutoCarrinho}
                                />
                    })}
                
            <p>Valor total: R${this.ValorTotal()},00</p>
            </CarrinhoContainer>
        </>
        )
    }

}
