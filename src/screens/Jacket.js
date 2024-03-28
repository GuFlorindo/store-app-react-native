import Produto from '../produto'
import React, { Component } from 'react'
    
export default class Jacket extends Component{
    

    render(){
      return(
        <Produto nome="Jacket" imagem={require('../img/jacket.png')} descricao="
        Apresentando uma jaqueta que combina estilo e funcionalidade de forma excepcional. Esta jaqueta é um exemplo perfeito de design contemporâneo, com um toque de influência clássica."
preco="Por R$50.00"/>)}
      }