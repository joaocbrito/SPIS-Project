import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PaginaConsulta({navigation}) {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
        <View style={styles.containerTelaPrin}>
            <Image source={require('../imgs/borcelle.png')} style={styles.logo}/>
            <Text style={styles.textoNomeLoja}>LOJA IACONA TECH</Text>
            
            <View style={styles.containerPrin}>
                <Text style={styles.label}></Text>
            </View>
            <LinearGradient colors={['rgba(255, 0, 199, 0.4)', 'transparent']} 
                                    style={styles.botoesTelaPrin} 
                                    start={{ x: 0.8, y: 1 }}
                                    end={{ x: 0, y: 0 }}>
            <Text style={styles.textoNomeBotao}>item</Text>
            </LinearGradient>
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
  containerTelaPrin: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#312F42',
    height: 250,
    width: 360,
  },
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    height: 1000,
    width: 360,
  },
  logo: {
    flex: 1,
    position: 'absolute',
    height: 110,
    width: 120,
    top: 10,
    left: 10
  },
  textoNomeLoja: {
    flex: 1,
    position: 'absolute',
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    top: 50,
    left: 130
  },
  containerPrin: {
    backgroundColor: '#fff',
    height: 1000,
    width: 360,
    borderRadius: 50,
    top: 150,
  },
  textoNomeBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  botoesTelaPrin: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 190,
    borderRadius: 20,
    top: 130,
    left: 80
  },
  configBotoes: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
  },
  espaco: {
    marginLeft: 40
  },
  logoBotao: {
    width: 27,
    height: 27,
    marginLeft: 50
  },
  maisBotao: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 50,
    marginLeft: 50
  },
  containerTotalItens: {
    flex: 1,
    position: 'absolute',
    top: 490,
    backgroundColor: '#fff',
    borderColor: "#D9D9D9",
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 6,
    borderWidth: 1,
    height: 105,
    width: 340,
    borderRadius: 20,
  },
  caixaTextoQtdItens: {
    width: 200,
    height: 60,
    alignItems: 'center',
  },
  textoQtdEstoque: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
    marginTop: 10
  },
  textoQTD: {
    flex: 1,
    position: 'absolute',
    color: "#312F42",
    top: 35,
    left: 120,
    fontWeight: '500',
    fontSize: 43
  },
  logoEstoque: {
    flex: 1,
    position: 'absolute',
    width: 70,
    height: 70,
    left: 250,
    top: 10
  },
  bolinhaAmarela: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFEBD3',
    borderRadius: 50,
    width: 55,
    height: 55
  },
  bolinhaRosa: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFD3EE',
    borderRadius: 50,
    width: 90,
    height: 90,
    top: 8,
    left: 150
  }
});
