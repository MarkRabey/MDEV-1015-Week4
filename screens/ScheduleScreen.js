import React, {
  useState,
  useEffect,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

const ScheduleScreen = (props) => {
  const [ performances, setPerformances ] = useState([]);
  
  useEffect(() => {
    if (performances.length === 0) {
      fetch('https://thawing-hollows-21222.herokuapp.com/performances')
        .then(res => res.json())
        .then(({ data }) => setPerformances(data));
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={ performances }
        keyExtractor={ x => `${x.id}` }
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{ item.date }</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

ScheduleScreen.navigationOptions = {
  title: 'Schedule',
};

export default ScheduleScreen;
