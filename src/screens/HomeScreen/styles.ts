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
    height: '50%',
    aspectRatio: 1
  },
  header1: {
      fontSize: 25,
      textAlign: 'center',
      color: '#000000',
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 15
  },
  header2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#707070',
}
});

export default styles;