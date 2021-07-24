import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lighterColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: '80%',
},
  textContainer:{
    fontSize: 20,
},
});

export default styles;
