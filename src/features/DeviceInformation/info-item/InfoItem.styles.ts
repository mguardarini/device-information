import { StyleSheet } from 'react-native'
import colors from "../../../assets/colors"
export default StyleSheet.create({
  view: {
    marginTop:10,
    padding: 13,
    backgroundColor:colors.goldenYellow,
    borderRadius: 5,
    flexGrow: 1,
    marginLeft:10,
    marginRight:10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 13
  },
  textOpacity: {
    color: colors.greenWhite,
    fontSize: 15
  }
})