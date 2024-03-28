import React, { Component } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'


export default function Home({navigation}){
  

    return(
      <ScrollView style={styles.tudo}>
        <View style={styles.nav}>
              
              <TouchableOpacity>
                <View ><Image style={styles.imageNav} source={require('../img/menu.png')} /></View>
              </TouchableOpacity>
              <Text style={styles.titleNav}>BAZZAAR</Text>
              <TouchableOpacity><Text style={styles.textNav}>Login</Text></TouchableOpacity>   

          </View>
          <View>
            <Image style={styles.banner} source={require('../img/vitrine.jpg')} />
          </View>
          
          <View style={styles.container}>
            <View>
              <Text style={styles.title}> Moda Masculina</Text>
              <ScrollView horizontal>
            
                <TouchableOpacity onPress={()=>navigation.navigate('Camisa Longa')} style={styles.carrosel}>
                  <Image style={styles.image } source={require('../img/long-sleeve.png')} />
                  <Text style={styles.text}>Long sleeve</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>navigation.navigate('Black t-shirt')} style={styles.carrosel}>
                  <Image style={styles.image } source={require('../img/tshirt.png')} />
                  <Text style={styles.text}>Black t-shirt</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Jacket')} style={styles.carrosel}>
                  <Image style={styles.image } source={require('../img/jacket.png')} />
                  <Text style={styles.text}>Jacket</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>


              </ScrollView>
              
            </View>
            <View>
              <Text style={styles.title}> Moda Feminina</Text>
              <ScrollView horizontal>
                
              <TouchableOpacity onPress={()=>navigation.navigate('Long Sleeve')} style={styles.carrosel}>
                  <Image style={ styles.image } source={require('../img/camisa.png')} />
                  <Text style={styles.text}>Long sleeve</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>navigation.navigate('Dress')} style={styles.carrosel}>
                  <Image style={ styles.image } source={require('../img/dress.png')} />
                  <Text style={styles.text}>Dress</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Pants')} style={styles.carrosel}>
                  <Image style={styles.image } source={require('../img/calça.png')} />
                  <Text style={styles.text}>Pants</Text>
                  <Text style={styles.text}>R$50</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View >
      </ScrollView>
    )
  }



const styles = StyleSheet.create({
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

    textNav:{
    color:"white",      
    padding:5,
    
    },
    titleNav:{
      color:"white",
      fontSize:30,
      fontWeight:"100",

    },
    imageNav:{
      height:30,  
      width:30,
      padding:5,
    },
    banner:{
      maxWidth:400,
      height:220,
    },
    title:{
      color:"black",
      fontSize:32,
      fontWeight:"100",
      marginTop:50,
      
    },
    image:{
      width:250,
      height:250,
      marginBottom:10
 
    },
    carrosel:{
      margin:30,
    },
    text:{
      color:"black",
      display:"flex",
      textAlign:"center",
      marginTop:20,
      fontSize:15,
      fontWeight:"300",
      overflow:"scroll",
      maxWidth:350
    },
    tudo:{
      backgroundColor:"white"
    },
    img:{
      maxWidth:375,
      height:220,
      marginHorizontal:10
    },
  margintop:{
    marginTop:25

  },
})