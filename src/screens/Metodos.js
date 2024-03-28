import React, { Component } from 'react'
import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native'

export default class Metodos extends Component{
    

    render(){
      return(
        <ScrollView>
            <Text style={styles.titulo}>Métodos de pagamento</Text>
            <View style={styles.conjunto}>
                <Text>EXEMPLO 1</Text>
                <Text>EXEMPLO 2</Text>
                <Text>EXEMPLO 3</Text>
            </View>
            <Image style={styles.image } source={require('../img/pagamento.png')} />
        </ScrollView>
      )}
}
const styles = StyleSheet.create({
    titulo: {
        color:"black",
    fontSize:32,
    fontWeight:"100",
    marginVertical:50,
},
    conjunto:{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        flexDirection:"row",
    },
    image:{
        maxWidth:400,
        height:220,
        marginTop:40,
      },
})