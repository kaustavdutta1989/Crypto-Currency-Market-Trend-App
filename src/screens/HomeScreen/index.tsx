import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const homeImage = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={homeImage} />
      <Text style={styles.header1}>Gupt Mudra Prayog Khel</Text>
      <Text style={styles.header2}>Invest your virtual ₹ 1Lac and compete with others</Text>
    </View>
  );
};

export default HomeScreen;