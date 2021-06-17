
import styled from "styled-components";


export const ContainerCard = styled.div`
  width: 20%;
`

export const BotaoRemover = styled.button`
  border: none;
  background-color: white;
  padding: 0;
  img{
    width: 20px;
    padding: 0;
    :hover {
      border-radius: 5px;
    background-color: red;
  }
  }
`

export const CardCarrinho = styled.div`
  display: flex;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 5px;
  @media(max-width: 600px){
    width: 95%;
    flex-direction: column;
  }
`

export const InfoCard = styled.div`
  width: 80%;
`

export const ContainerBotao = styled.div`
  display: flex;
  align-items: center;
`