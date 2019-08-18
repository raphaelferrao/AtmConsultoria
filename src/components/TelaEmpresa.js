import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import ImgDetalheEmpresa from '../assets/images/detalhe_empresa.png';

const TelaEmpresa = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EC7148" />

      <BarraNavegacao voltar navigation={navigation} corDeFundo="#EC7148" />

      <View style={styles.cabecalho}>
        <Image source={ImgDetalheEmpresa} />
        <Text style={styles.txtTitulo}>A Empresa</Text>
      </View>

      <View style={styles.detalheEmpresa}>
        <Text style={styles.txtDetalheEmpresa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus sapien, semper suscipit ultrices quis, eleifend eu augue. Phasellus pharetra enim venenatis odio sodales convallis.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  },

  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'center'
  },

  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },

  txtDetalheEmpresa: {
    fontSize: 18
  }
});

export default TelaEmpresa;
