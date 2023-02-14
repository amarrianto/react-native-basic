import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Operan from './Operan';

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Amar',
    };
  }
  gantiState() {
    this.setState({
      name: 'Rianto',
    });
  }
  render() {
    const {name} = this.state;
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Title</Text>
          <View style={styles.garis} />
          <View style={styles.isi}>
            <Text>Ini adalah state: {name}</Text>
            <Operan />
            <TouchableOpacity>
              <Text style={styles.tombol} onPress={() => this.gantiState()}>
                Ganti State
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  isi: {
    marginTop: 30,
  },
  tombol: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
  }
});
