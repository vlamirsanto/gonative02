import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
  columnContainer: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
});
