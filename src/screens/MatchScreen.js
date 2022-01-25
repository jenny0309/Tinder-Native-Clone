import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';

import users from '../../TinderAssets/assets/data/users';

const MatchScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
        New Matches
      </Text>
      <View style={styles.users}>
        {users.map(user => (
          <View key={user.id} style={styles.user}>
            <Image
              key={user.id}
              source={{uri: user.image}}
              style={styles.image}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    marginLeft: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 4,
    borderColor: '#F63A6E',
    borderRadius: 50,
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
