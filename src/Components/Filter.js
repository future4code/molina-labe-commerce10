import React from 'react';
import styled from "styled-components";
import App from '../App';

const ContainerFiltro = styled.div `
    background-color: red;
    display: flex;
    flex-direction:column;
    width: 20%;
    margin: 25px;

`


export default class Filter extends React.Component {
    
    state = {
        texto: "",
        valorMinimo: "",
        valorMaximo: "",
        filtro: "",
        
    }

    
    filtrarProdutosPorNome = (event) => {
        const produtosFiltrados = this.props.listaProdutos.filter((produto) => {
            return (produto.nome.includes(event.target.value) )
        })
        return produtosFiltrados
    }


    filtrarValorMinimo = (event) => {
        if(this.state.valorMaximo !== "" && event.target.value !== "") {
            const valoresFiltrados = this.props.listaProdutos.filter((produto) => {
                return (produto.preco < this.state.valorMaximo && produto.preco > event.target.value)
            })
            return valoresFiltrados
        } else if (this.state.valorMinimo !== "" && event.target.value === "") {
            const valoresFiltrados = this.props.listaProdutos.filter((produto) => {
                return(produto.preco > this.state.valorMinimo)
            })
            return valoresFiltrados
        } else {
            const valoresMinimosFiltrados = this.props.listaProdutos.filter((produto) => {
            return (produto.preco > event.target.value)
        })
            return valoresMinimosFiltrados
        }
    }

    filtrarValorMaximo = (event) => {
        if(this.state.valorMinimo !== "" && event.target.value !== "" ) {
            const valoresFiltrados = this.props.listaProdutos.filter((produto) => {
                return (produto.preco < event.target.value && produto.value > this.state.valorMinimo)
            })
        return valoresFiltrados
        } else if (this.state.valorMaximo !== "" && event.target.value === "") {
            const valoresFiltrados = this.props.listaProdutos.filter((produto) => {
                return(produto.preco < this.state.valorMaximo)
            })
            return valoresFiltrados
        }
        else {
            const valoresMaximosFiltrados = this.props.listaProdutos.filter((produto) => {
                return (produto.preco < event.target.value)
        })
        return valoresMaximosFiltrados
        }
    }


    onChangeInputNomeProduto = (event) => {
        this.setState({ texto: event.target.value})
        if(event.target.value.length !== 0){
            this.props.funcao(this.filtrarProdutosPorNome(event))
        } else {
            this.props.funcao(this.props.listaProdutos)
        }
    }


    onChangeInputValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value})
        if(event.target.value.length !== 0) {
           this.props.funcao(this.filtrarValorMinimo(event))
        } else if(this.state.valorMaximo === "" && event.target.value === ""  ) {
            this.props.funcao(this.props.listaProdutos)
        } else if(this.state.valorMaximo !== "" && event.target.value === "") {
            this.props.funcao(this.filtrarValorMaximo(event))
        }
    }

    onChangeInputValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value})
        if(event.target.value.length !== 0) {
          this.props.funcao(this.filtrarValorMaximo(event))
        } else if(event.target.value === "" && this.state.valorMinimo === "" ){
           this.props.funcao(this.props.listaProdutos)
        } else if(this.state.valorMinimo !== "" && event.target.value === "") {
            this.props.funcao(this.filtrarValorMinimo(event))
        }
    }

    onChangeFilter = (event) => {
        this.setState({ filtro: event.target.value})

        if(event.target.value === "crescente") {
            this.props.funcao(this.ordenaCrescente())
        } else if( event.target.value === "decrescente") {
            this.props.funcao(this.ordenaDecrescente())
        }
    } 

    ordenaDecrescente = () => {
        function funcao(a, b) {
            if(a.preco > b.preco) {
                return -1
            }
        
            if(a.preco < b.preco) {
                return 1
            }
        
            return 0
        }

        const copiaListaProdutosOriginal = [...this.props.listaProdutos]
        const copiaListaProdutosFiltrados = [...this.props.produtosFiltrados]
        copiaListaProdutosFiltrados.sort(funcao)
        copiaListaProdutosOriginal.sort(funcao)
        this.props.ordenar(copiaListaProdutosOriginal)
        return copiaListaProdutosFiltrados 

    }

    ordenaCrescente = () => {
        function ordena(a, b) {
            if(a.preco < b.preco) {
                return -1
            }
        
            if(a.preco > b.preco) {
                return 1
            }
        
            return 0
        }

        const copiaListaProdutosOriginal = [...this.props.listaProdutos]
        const copiaListaProdutosFiltrados = [...this.props.produtosFiltrados]
        copiaListaProdutosFiltrados.sort(ordena)
        copiaListaProdutosOriginal.sort(ordena)
        this.props.ordenar(copiaListaProdutosOriginal)
        return copiaListaProdutosFiltrados
    }
    render () {
        return(
            <div> 
                <h3> Filtros</h3>
                <ContainerFiltro>
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
                        <input type="text" value={this.state.texto}  onChange={this.onChangeInputNomeProduto} />
                    </label>
                </ContainerFiltro>
                <select value={this.state.filtro} onChange={this.onChangeFilter} > 
                    <option value="filtro"> Filtro</option>
                    <option value="crescente"> Crescente</option>
                    <option value="decrescente"> Decescente</option>
                </select>
            </div>
        )
    }
   
}