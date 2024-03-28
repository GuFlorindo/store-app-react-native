import Produto from '../produto'
import React, { Component } from 'react'
    
export default class CamisaLonga extends Component{
    

    render(){
      return(
        <Produto nome="Camisa Masculina" imagem={require('../img/long-sleeve.png')} descricao="
        Apresentamos a camisa de manga longa cinza masculina, uma peça versátil que combina estilo e conforto de forma única. Confeccionada em tecido suave de alta qualidade, essa camisa é perfeita para diversas ocasiões."
preco="Por R$50.00"/>)}
      }