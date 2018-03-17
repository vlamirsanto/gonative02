import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.light,
    marginTop: metrics.baseMargin,
    lineHeight: 21,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
