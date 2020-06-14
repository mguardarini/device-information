import { StyleSheet } from 'react-native'
import colors from "../../assets/colors"

export default StyleSheet.create({
  button: {
    marginTop:10,
    padding: 16,
    backgroundColor: colors.grayBlack,
    borderRadius: 5,
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 16
  }
})