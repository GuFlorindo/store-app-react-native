import React, { Component } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class Produto extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <ScrollView >
                <View style={styles.center}>
                    
                    <Image style={styles.imagem} source={this.props.imagem}/>
                    <Text style={styles.titulo}>{this.props.nome}</Text>
                    <Text style={styles.descricao}>{this.props.descricao}</Text>
                    <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>ADQUIRA</Text></TouchableOpacity>
                    <Text style={styles.titulo}>{this.props.preco}</Text>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imagem:{
        width:500,
        height:500
    },
    titulo:{
        color:"black",
        fontSize:40,
        fontWeight:"300",
    },
    center:{
        alignItems:"center"
    },
    descricao:{
      color:"black",
      display:"flex",
      textAlign:"center",
      marginTop:20,
      fontSize:15,
      fontWeight:"300",
      overflow:"scroll",
      maxWidth:350,
      lineHeight:20
    },
    botao:{
        backgroundColor:"black",
        padding:10,
        marginVertical:30
    },
    botaoTexto:{
        color:"white",
        fontSize:30,
        fontWeight:"300"
    }
})