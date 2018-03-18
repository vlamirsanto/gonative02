import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

export default StyleSheet.create({
  container: {
    ...general.box,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
  },
  repoTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});
