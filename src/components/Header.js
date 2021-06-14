import React from 'react';
import styled from 'styled-components'

import Foguete from '../img/logo.png'
import Carrinho from '../img/carrinho.png'

const HeaderContainer = styled.div`
    background-color: #191970;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 80px;

    box-shadow: 0 0 100px black;

`
const Logo = styled.img `

    width: 45px;
    margin: 5px;
    height: 30px;

    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.4);
        cursor: pointer;
    }

`

const NomeSite = styled.h3`
    margin: 10px;
    color: white;

`

const IconeCarrinho = styled.img `
    width: 30px;
    height: 30px;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

    :hover {

       
        -webkit-transform: scale(1.1);
        transform: scale(1.4);
        cursor: pointer;
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    align-items: center;

`

const ContainerNome = styled.div `
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 25px;

`
const BotaoCabecalho = styled.button `
    margin-right: 30px;
    height: 35px;
    padding: 0px 15px;
    border: 1px solid white;
    border-radius: 25px;
    background-color: #191970;
    color: white;

    :hover {
        opacity: 35%;
        cursor: pointer;
    }

`

export default class Header extends React.Component {
    render(){
        return (
            <HeaderContainer>
                <ContainerNome>
                    <NomeSite> SPACE</NomeSite>
                    <Logo src={Foguete} />
                </ContainerNome>
                <ContainerBotoes>
                    <BotaoCabecalho> HOME</BotaoCabecalho>
                    <BotaoCabecalho> FAÇA SUA RESERVA </BotaoCabecalho>
                    <BotaoCabecalho> LOGIN </BotaoCabecalho>
                    <IconeCarrinho src={Carrinho} />
                </ContainerBotoes>
            </HeaderContainer>
        )
    }
} 
