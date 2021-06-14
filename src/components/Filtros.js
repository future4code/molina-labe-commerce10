import React from 'react';
import styled from 'styled-components';


const ContainerFiltro = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 40px;
`;




export default class Filter extends React.Component {

    state = {
        texto: "",
        valorMinimo: '',
        valorMaximo: ''
    }

    onChangeInputNomeProduto = (event) => {
        this.setState({ texto: event.target.value})
    }


    onChangeInputValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value})
    }

    onChangeInputValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value})
    }

    render () {
        return(
            <ContainerFiltro>
            <div> 
                <label>
                    Valor mínimo:
                    <input type="number" value={this.state.valorMinimo} onChange={this.onChangeInputValorMinimo}/>
                </label>
                <label>
                    Valor máximo:
                    <input type="number" value={this.state.valorMaximo} onChange={this.onChangeInputValorMaximo} />
                </label>
                <label>
                    Busca por nome:
                    <input type="text" value={this.state.texto}  onChange={this.onChangeInputNomeProduto}/>
                </label>
            </div>
            </ContainerFiltro>
        )
    }

}