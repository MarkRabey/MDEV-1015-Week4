import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const ArtistsScreen = (props) => {
  const [ artists, setArtists ] = useState([]);
  const [ dataLoaded, setDataLoaded ] = useState(false);
  
  useEffect(() => {
    if (!dataLoaded) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({ data }) => {
          setArtists(data);
          setDataLoaded(true);
        });
    }
  });

  const keyExtractor = (item) => {
    return `${ item.id }`;
  }

  return (
    <FlatList
      data={ artists }
      keyExtractor={ keyExtractor }
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{ item.name }</Text>
          </View>
        );
      }}
    />
  );
}

export default ArtistsScreen;

ArtistsScreen.navigationOptions = {
  title: 'Artists',
};
