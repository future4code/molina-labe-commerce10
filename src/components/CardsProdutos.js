// import React from 'react'
// import styled from 'styled-components';


// const CardContainer = styled.div`
// border:solid 1px black;
//     display:flex;
//     flex-direction:column;
//     box-sizing:border-box;
//     flex-wrap: wrap;
//     align-items:center;
//     margin: 10px;
//     padding-bottom:16px;
//     img {
//         width: 208px;
//     }
// `;

// const CardInfo = styled.div`
// display: flex;
// flex-direction: column;
// padding: 16px;
// p {
//   margin: 4px 0;
// }
// `

// const AddCarrinhoButton = styled.button`
// align-self: center;
// margin-top: 4px;
// `

// export default class CardsProdutos extends React.Component {
//     render() {
//       const produto = this.props.produto
//       return <CardContainer>
//         <img src={produto.imageUrl}/>
//         <CardInfo>
//           <p>{produto.nome}</p>
//           <p>R${produto.preco},00</p>
//           <AddCarrinhoButton onClick={() => this.props.AddProdutoCarrinho(produto.id)}>
//             Adicionar ao carrinho
//           </AddCarrinhoButton>
//         </CardInfo>
//       </CardContainer>
//     }
//   }
