import React, {useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from "./style";
import {useNavigation} from "@react-navigation/native";
const homeImage = require('../../../assets/images/Saly-1.png');

export interface AccountCoinProps {
    accountCoin: {
      id: string,
      image: string,
      name: string,
      symbol: string,
      amount: number,
      valueUSD: number,
      valueINR: number,
    }
}

const AccountCoin = (props : AccountCoinProps) => {
  const {
    accountCoin: {
      id,
      image,
      name,
      symbol,
      amount,
      valueUSD,
      valueINR,
    },
  } = props;
  const navigation = useNavigation();

  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails', { id })}>
      <View style={styles.left}>
        <Image  style={styles.image} source={{uri: image}}/>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>₹{(amount * valueUSD).toFixed(3)}</Text>
        <Text style={styles.symbol}>{symbol} {amount.toFixed(3)}</Text>
      </View>
    </Pressable>
    
  );
};

export default AccountCoin;