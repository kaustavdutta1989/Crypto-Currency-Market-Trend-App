import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MarketCoin from '../../components/MarketCoin';
const accountImage = require('../../../assets/images/Saly-17.png');
import styles from './style';

const marketCoins = [{
  id: '1',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Virtual Dollars',
  symbol: 'USD',
  recentValue: -6420,
  valueUSD: 6420,
  valueINR: 70 * 6420,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: -3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: -3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},{
  id: '3',
  image: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
  name: 'Etherium',
  symbol: 'ETH',
  recentValue: 3012,
  valueUSD: 3012,
  valueINR: 70 * 3012,
},]

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList style={{width: '100%'}}
        data = {marketCoins}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={accountImage} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Market Sheet</Text>
            </View>
          </>
      )}
      />
    </View>
  );
};

export default MarketScreen;