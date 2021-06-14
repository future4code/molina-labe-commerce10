import React from 'react';
import styled from 'styled-components'

import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Whatsapp from '../img/whatsapp.png'

const FooterContainer = styled.div`
    background-color: #191970;
    display: flex;
    height: 80px;

    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const IconesRedesSociais = styled.img `
    width: 40px;
    height: 40px;
    margin-left: 5px;


`

const InformacoesContainer = styled.div `

    display: flex;
    justify-content: flex-end;
    margin-right: 35px;
    align-items: center;
    

    p {
        padding-left: 15px;
    }

`
const ContainerRedesSociais = styled.div `
    margin-left: 35px;
`

export default class Footer extends React.Component {
    render(){
        return <FooterContainer>
            
            <ContainerRedesSociais>
                <IconesRedesSociais src={Facebook} />
                <IconesRedesSociais src={Instagram} />
                <IconesRedesSociais src={Whatsapp} />
            </ContainerRedesSociais>
            <InformacoesContainer>
                <p> | Trabalhe Conosco |</p>
                <p> | FAQ |</p>
                <p> | Nosso Time |</p>
                <p> | Contato |</p>
                <p> © Copyright 2021 - SPACE</p>
            </InformacoesContainer>

          </FooterContainer>
    }
} 