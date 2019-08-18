import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import ImgDetalheCliente from '../assets/images/detalhe_cliente.png';
import ImgCliente1 from '../assets/images/cliente1.png';
import ImgCliente2 from '../assets/images/cliente2.png';

const TelaClientes = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B9C941" />

      <BarraNavegacao voltar navigation={navigation} corDeFundo="#B9C941" />

      <View style={styles.cabecalho}>
        <Image source={ImgDetalheCliente} />
        <Text style={styles.txtTitulo}>Nossos Clientes</Text>
      </View>

      <View>
        <View style={styles.detalheCliente}>
          <Image source={ImgCliente1} />
          <Text style={styles.txtDetalheCliente}>Lorem impsum dolorem 1</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={ImgCliente2} />
          <Text style={styles.txtDetalheCliente}>Lorem impsum dolorem 2</Text>
        </View>
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
    color: '#B9C941',
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'center'
  },

  detalheCliente: {
    padding: 20,
    marginTop: 10
  },

  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});

export default TelaClientes;
