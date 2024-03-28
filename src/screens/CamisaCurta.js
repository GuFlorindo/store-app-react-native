import Produto from '../produto'
import React, { Component } from 'react'
    
export default class CamisaCurta extends Component{
    

    render(){
      return(
        <Produto nome="Camisa Masculina" imagem={require('../img/tshirt.png')} descricao="
        Esta camisa masculina preta é uma peça de elegância e estilo atemporal. O preto profundo do tecido é impecável e versátil, perfeito para diversas ocasiões. O corte é moderno e sofisticado, abraçando as linhas do corpo de forma sutil, sem sacrificar o conforto."
preco="Por R$50.00"/>)}
      }