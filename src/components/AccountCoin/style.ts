import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: '90%',
    justifyContent: "space-between",
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
    //backgroundColor: 'lightblue',
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
    marginRight: 12
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  symbol: {
    color: '#6b6b6b',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default styles;