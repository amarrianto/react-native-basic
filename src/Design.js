import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class Design extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Title</Text>
          <View style={styles.garis} />
          <View style={styles.isi}>
            <Text>Flex Direction Row (Vertical)</Text>
            <View style={styles.flexVertical}>
              <View style={styles.boxRed} />
              <View style={styles.boxYellow} />
              <View style={styles.boxGreen} />
            </View>

            <Text>Flex Direction Column (Horizontal)</Text>
            <View>
              <View style={styles.boxRed} />
              <View style={styles.boxYellow} />
              <View style={styles.boxGreen} />
            </View>

            <Text>Justify Content</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.boxRed} />
              <View style={styles.boxYellow} />
              <View style={styles.boxGreen} />
            </View>

            <Text>Align Items</Text>
            <View
             style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.boxRed} />
              <View style={styles.boxYellow} />
              <View style={styles.boxGreen} />
            </View>
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
  flexVertical: {
    flexDirection: 'row',
  },
  boxRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  boxYellow: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
  boxGreen: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
