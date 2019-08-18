import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import ImgDetalheContato from '../assets/images/detalhe_contato.png';

const TelaContatos = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C1BD8C" />

      <BarraNavegacao voltar navigation={navigation} corDeFundo="#C1BD8C" />

      <View style={styles.cabecalho}>
        <Image source={ImgDetalheContato} />
        <Text style={styles.txtTitulo}>Contatos</Text>
      </View>

      <View style={styles.detalheContato}>
        <Text style={styles.txtDetalheContato}>TEL: (12) 3456-7890</Text>
        <Text style={styles.txtDetalheContato}>CEL: (98) 7654-3210</Text>
        <Text style={styles.txtDetalheContato}>Email: contato@email.com</Text>
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
    color: '#C1BD8C',
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'center'
  },

  detalheContato: {
    marginTop: 20,
    padding: 20
  },

  txtDetalheContato: {
    fontSize: 18
  }
});

export default TelaContatos;
