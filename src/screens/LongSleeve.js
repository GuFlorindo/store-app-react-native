import Produto from '../produto'
import React, { Component } from 'react'
    
export default class LongSleeve extends Component{
    

    render(){
      return(
        <Produto nome="Feminine Long Sleeve" imagem={require('../img/camisa.png')} descricao="
        Apresentamos a camisa de manga longa preta feminina, uma peça versátil que combina estilo e conforto de forma única. Confeccionada em tecido suave de alta qualidade, essa camisa é perfeita para diversas ocasiões."
preco="Por R$50.00"/>)}
      }