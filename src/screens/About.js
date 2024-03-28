import React, { Component } from 'react'
import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native'

export default class About extends Component{
    

    render(){
      return(
        <ScrollView>
            <View>
            <Text style={styles.titleSobre}>Sobre o Bazzaar</Text>
            <Image style={styles.img} source={require('../img/vitrine2.jpg')} />
            <Text  style={styles.textSobre} >Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você.</Text>
          </View>
          <View style={styles.margintop}>
            <Text style={styles.endereco}> Rua Eusébio 10</Text>
            <Text style={styles.endereco}>Centro, Cidade das Águas</Text>
            <Text style={styles.endereco}>Aberta de segunda a sexta das 10:00 às 21:00</Text>
          </View>
          <View style={styles.nav}>
            <TouchableOpacity><Image style={styles.imageNav} source={require('../img/insta.png')} /></TouchableOpacity>
            <TouchableOpacity><Image style={styles.imageNav} source={require('../img/face.png')} /></TouchableOpacity>
            <TouchableOpacity><Image style={styles.imageNav} source={require('../img/what.png')} /></TouchableOpacity>
          </View>
        </ScrollView>
      )
      }}
      const styles = StyleSheet.create({
        textSobre:{
        color:"black",
        lineHeight:40,
        letterSpacing:4,
        fontSize:20,
        fontWeight:"300",
        marginHorizontal:10,
        textAlign:"center",
        backgroundColor:"grey"
      },
      titleSobre:{      
      color:"black",
      fontSize:32,
      fontWeight:"100",
      marginVertical:50,
    },
    endereco:{
        color:"black",
        margin:10,
      },
      img:{
        maxWidth:375,
        height:220,
        marginHorizontal:10
      },
      imageNav:{
        height:30,  
        width:30,
        padding:5,
      },
      nav: {
        backgroundColor: "black",
        maxWidth:593,
        height:50,
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        flexDirection:"row",
        padding:3,
      },
      })
      