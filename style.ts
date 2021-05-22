import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'red',
  },
  blackBorderWidth: {
    borderWidth: 2,
    borderColor: 'black',
  },
  box: {
    borderRadius: 10,
    width: 60,
    height: 60,
    opacity: 1,
    shadowColor: 'grey',
    shadowRadius: 3,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 1,
    elevation: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default styles;