import Produto from '../produto'
import React, { Component } from 'react'
    
export default class Dress extends Component{
    

    render(){
      return(
        <Produto nome="Dress" imagem={require('../img/dress.png')} descricao="
        Este vestido é uma expressão encantadora de feminilidade e graça. Com um design que equilibra perfeitamente o romântico e o moderno."
preco="Por R$50.00"/>)}
      }