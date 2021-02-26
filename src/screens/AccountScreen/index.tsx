import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import AccountCoin from '../../components/AccountCoin';
const accountImage = require('../../../assets/images/Saly-10.png');

const accountCoins = [{
  id: '1',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Virtual Dollars',
  symbol: 'USD',
  amount: 6420,
  valueUSD: 6420,
  valueINR: 70 * 6420,
},{
  id: '2',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Bitcoin',
  symbol: 'BTC',
  amount: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  amount: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
}]

const AccountScreen = () => {
  const [balance, setBalance] = useState(0);
  const [portfolioCoins, setPortfolioCoins] = useState([]);
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={accountImage} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Account Balance</Text>
        <Text style={styles.balance}>₹ 10,00,000</Text>
      </View>

      <FlatList
        data = {accountCoins}
        renderItem={({item}) => <AccountCoin accountCoin={item} />}
      />
    </View>
  );
};

export default AccountScreen;