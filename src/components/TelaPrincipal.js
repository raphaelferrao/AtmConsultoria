import React from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableHighlight } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import ImgLogo from '../assets/images/logo.png';
import ImgMenuCliente from '../assets/images/menu_cliente.png';
import ImgMenuContato from '../assets/images/menu_contato.png';
import ImgMenuEmpresa from '../assets/images/menu_empresa.png';
import ImgMenuServico from '../assets/images/menu_servico.png';


const TelaPrincipal = ( props ) => {

  const { navigation } = props;

  const irParaTelaClientes = () => {
     navigation.navigate('TelaClientes');
  };

  const irParaTelaContatos = () => {
    navigation.navigate('TelaContatos');
  };

  const irParaTelaServicos = () => {
    navigation.navigate('TelaServicos');
  };

  const irParaTelaEmpresa = () => {
    navigation.navigate('TelaEmpresa');
  };

  return (
    <View>
      <StatusBar backgroundColor="#CCC" />

      <BarraNavegacao voltar={false} navigation={navigation} />

      <View style={styles.logo}>
        <Image source={ImgLogo} />
      </View>

      <View style={styles.menu}>
        <View style={styles.menuGrupo}>
          <TouchableHighlight
            underlayColor={'#B9C641'}
            activeOpacity={0.3}
            onPress={irParaTelaClientes} >
            <Image style={styles.menuImg} source={ImgMenuCliente} />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={'#C1BD8C'}
            activeOpacity={0.3}
            onPress={irParaTelaContatos} >
            <Image style={styles.menuImg} source={ImgMenuContato} />
          </TouchableHighlight>
        </View>

        <View style={styles.menuGrupo}>
          <TouchableHighlight
            underlayColor={'#EC7148'}
            activeOpacity={0.3}
            onPress={irParaTelaEmpresa} >
            <Image style={styles.menuImg} source={ImgMenuEmpresa} />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={'#19D1C8'}
            activeOpacity={0.3}
            onPress={irParaTelaServicos} >
            <Image style={styles.menuImg} source={ImgMenuServico} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },

  menu: {
    alignItems: 'center'
  },

  menuGrupo: {
    flexDirection: 'row'
  },

  menuImg: {
    margin: 15
  }
});

export default TelaPrincipal;
