import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import AboutScreen from '../screens/AboutScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar`
          : 'md-calendar'
      }
    />
  ),
};

ScheduleStack.path = '';

const ArtistsStack = createStackNavigator(
  {
    Artists: ArtistsScreen,
  },
  config
);

ArtistsStack.navigationOptions = {
  tabBarLabel: 'Artists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

ArtistsStack.path = '';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'} />
  ),
};

AboutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ScheduleStack,
  ArtistsStack,
  AboutStack,
});

tabNavigator.path = '';

export default tabNavigator;
