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


const BottonRemover = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 25px;
    padding: 0px 5px;
    height: 35px;


    color: black;

    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.2);
        cursor: pointer;
}

`


export default class ItensCarrinho extends React.Component {
    render () {
        return (
            <ItemContainer>
                <img src = {this.props.produtosCarrinho.imageUrl}/>
                <p>{this.props.produtosCarrinho.nome}</p>
                <p>x{this.props.produtosCarrinho.quantidade}</p>

                <BottonRemover onClick={()=> this.props.removerProdutoCarrinho(this.props.produtosCarrinho.id)}
                >Remover 
                </BottonRemover>

                <button onClick={()=> this.props.removerProdutoCarrinho(this.props.produtosCarrinho.id)}
                >Remover Item
                </button>

            </ItemContainer>
        )
    }

    
}