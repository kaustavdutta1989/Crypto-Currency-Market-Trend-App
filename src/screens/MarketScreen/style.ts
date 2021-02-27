import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.light.background,
  },  
  image: {
    height: 175,
    resizeMode: 'contain',
  },
  balanceContainer: {
    marginVertical: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777777',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default styles;