/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components';


const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
img {
    width: 50px;
}
`

export default class ItensCarrinho extends React.Component {
    render () {
        return (
            <ItemContainer>
                <img src = {this.props.produtosCarrinho.imageUrl}/>
                <p>{this.props.produtosCarrinho.nome}</p>
                <p>x{this.props.produtosCarrinho.quantidade}</p>
                <button onClick={()=> this.props.removerProdutoCarrinho(this.props.produtosCarrinho.id)}
                >Remover Item
                </button>
            </ItemContainer>
        )
    }

    
}