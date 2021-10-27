import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    display: 'flex',
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerArea: {
    display: 'flex',
    flex: 1,
  },
  formArea: {
    display: 'flex',
    flex: 3,
  },
  headerWrapper: {
    display: 'flex',
    zIndex: 999999,
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
