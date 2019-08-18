import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import ImgDetalheServicos from '../assets/images/detalhe_servico.png';

const TelaServicos = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#19D1C8" />

      <BarraNavegacao voltar navigation={navigation} corDeFundo="#19D1C8" />

      <View style={styles.cabecalho}>
        <Image source={ImgDetalheServicos} />
        <Text style={styles.txtTitulo}>Nossos Serviços</Text>
      </View>

      <View style={styles.detalheServicos}>
        <Text style={styles.txtDetalheServicos}>- Consultoria</Text>
        <Text style={styles.txtDetalheServicos}>- Processos</Text>
        <Text style={styles.txtDetalheServicos}>- Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    alignContent: 'center',
    alignSelf: 'center'
  },

  detalheServicos: {
    marginTop: 20,
    padding: 20
  },

  txtDetalheServicos: {
    fontSize: 18
  }
});

export default TelaServicos;
