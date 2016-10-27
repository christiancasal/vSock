import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  inputBox:{
    height: 30,
    width: 240,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12
  },
  inputPW: {
    backgroundColor: '#EEEEEE',
    paddingLeft:5,
    marginTop: 15,
    marginBottom: 15
  },
  inputEmail: {
    backgroundColor: '#EEEEEE',
    marginTop: 15,
    marginBottom: 0,
    paddingLeft:5,
  },
  inputEmailTextCheck: {
    fontSize: 10,
    color: 'red'
  }
})
