import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  sigIn = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar, precisamos que você informe seu usuário no GitHub.
        </Text>

        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0,0,0,0)"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.sigIn}
          >
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
