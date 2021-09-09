import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  search: {
    borderRadius: 15,
    backgroundColor: 'rgb(69,69,69)',
  },
  containerSearch: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 0,
    maxHeight: 70,
  },
  text: {
    color: '#ffffff',
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButtonsLike: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButtonsLink: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});
