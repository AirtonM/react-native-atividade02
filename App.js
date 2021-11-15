// Importações
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// ÍNICIO - Conteúdo
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Galeria de Imagens{"\n"}Airton Lima Marinho</Text>
      <Text style={styles.tema}>caminhonetes grandes</Text>
      <View style={styles.galeria}>
        <Image style={styles.foto} source={require('./src/image/01.jpg')} />
        <Image style={styles.foto} source={require('./src/image/02.jpg')} />
        <Image style={styles.foto} source={require('./src/image/03.jpg')} />
        <Image style={styles.foto} source={require('./src/image/04.jpg')} />
        <Image style={styles.fotoLarga} source={{uri:'https://blog.machinecult.com.br/wp-content/uploads/2014/03/monster-truck.jpg'}} />
      </View>
    </View>
  );
}
// FIM - Conteúdo

// ÍNICIO - Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b3621',
    alignItems: 'center',
    justifyContent: 'top',
  },
  titulo: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform:'capitalize',
    fontSize:'1.5em',
    margin: '15px ',
    marginBottom: '30px'
  },
  tema: {
    color: '#b3b3b3',
    fontWeight: 'bold',
    textTransform:'uppercase',
    marginBottom:'20px',
  },
  galeria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '400px',
  },
  foto: {
    width: '200px',
    height: '200px',
    resizeMode: 'stretch',
    border: '1px solid #fff',
  },
  fotoLarga: {
    width: '400px',
    height: '200px',
    border: '1px solid #fff',
  },
});
// FIM - Estilos