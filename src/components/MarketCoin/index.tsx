import React, {useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from "./style";
import {useNavigation} from "@react-navigation/native";
const homeImage = require('../../../assets/images/Saly-1.png');

export interface MarketCoinProps {
    marketCoin: {
      id: string,
      image: string,
      name: string,
      symbol: string,
      recentValue: number,
      valueUSD: number,
      valueINR: number,
    }
}

const MarketCoin = (props : MarketCoinProps) => {
  const {
    marketCoin: {
      id,
      image,
      name,
      symbol,
      recentValue,
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
        <Text style={styles.value}>₹{(recentValue * valueUSD).toFixed(3)}</Text>
        <Text style={{color: recentValue > 0 ? '#398f0a': '#f10000'}}>
          {recentValue > 0 && '+'}{recentValue}
        </Text>
      </View>
    </Pressable>
    
  );
};

export default MarketCoin;