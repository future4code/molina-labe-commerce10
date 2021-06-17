import React from 'react';
import styled from 'styled-components'


const ContainerFiltro = styled.div `
    
    border: 1px solid black;

    width: 30%;
    margin: 25px;

`

const ContainerCaixaInput = styled.label `
    margin-bottom: 15px;

`

const ContainerBotoes = styled.div `

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
   padding: 10px 10px 10px 20px;
  



`

const TituloFiltros = styled.h2 `

    display: flex;
    justify-content: center;;

`

const Input = styled.input `
    width: 180px;


`

const Select = styled.div `

    display:flex;
    
    align-items: center;
    justify-content: center;

    select{
        width: 189px;
    }

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
                return (produto.preco < event.target.value && produto.preco > this.state.valorMinimo)
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
            <ContainerFiltro> 
                <TituloFiltros> Filtros</TituloFiltros>
                <ContainerBotoes>
                    <ContainerCaixaInput>
                        Valor mínimo:
                        <Input type="number" value={this.state.valorMinimo} onChange={this.onChangeInputValorMinimo}/>
                    </ContainerCaixaInput>
                    <ContainerCaixaInput>
                        Valor máximo:
                        <Input type="number" value={this.state.valorMaximo} onChange={this.onChangeInputValorMaximo} />
                    </ContainerCaixaInput>
                    <ContainerCaixaInput>
                        Busca por nome:
                        <Input type="text" value={this.state.texto}  onChange={this.onChangeInputNomeProduto} />
                    </ContainerCaixaInput>
                </ContainerBotoes>
                <Select>
                <select value={this.state.filtro} onChange={this.onChangeFilter} > 
                    <option value="filtro"> Filtro</option>
                    <option value="crescente"> Crescente</option>
                    <option value="decrescente"> Decescente</option>
                </select></Select>
            </ContainerFiltro>
        )
    }
   
}