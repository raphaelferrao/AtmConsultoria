import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import ImgVoltar from '../assets/images/btn_voltar.png';

const BarraNavegacao = (props) => {

  const { voltar, navigation, corDeFundo } = props;

  const irParaTelaPrincipal = () => {
    navigation.navigate('TelaPrincipal');
  };

  return (
    <View style={[styles.barraTitulo, { backgroundColor: corDeFundo || '#CCC' }]}  >
      { 
        (voltar) && (
          <TouchableOpacity onPress={irParaTelaPrincipal}>
            <Image source={ImgVoltar} />
          </TouchableOpacity>
        )
      }
      <Text style={styles.titulo}>ATM Consultoria</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },

  titulo: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  }
});

export default BarraNavegacao;
