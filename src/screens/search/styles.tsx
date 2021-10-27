import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentWrapper: {
    display: 'flex',
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerWrapper: {
    display: 'flex',

    borderBottomColor: '#B2B1B9',
    borderBottomWidth: 1,
    paddingBottom: 20,
    zIndex: 999999,
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
});

export default styles;
