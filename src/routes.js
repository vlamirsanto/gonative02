import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { metrics } from 'styles';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Repositories from 'pages/repositories';

import HeaderRight from 'components/HeaderRight';

const createNavigator = (isLogged = false) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default createNavigator;
