import React from 'react';
import { Text, View, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image
          style={{ width: 170, height: 170 }}
          source={{
            uri: 'https://i.imgur.com/TTbviEJ.jpg',
          }}
        />
        <Text>
        It Starts With You.</Text>
         <Button
          title=" Start Journey"
      onPress={() => this.props.navigation.navigate('Explore')}
      />
      </View>
    );
  }
}
class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map!</Text>
        <Image
      source={{uri: 'https://i.imgur.com/jaigxMY.png'}} style={{width: 350, height: 625}}
      />
      </View>
    );
  }
}

class PathScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{position: "absolute", top: 20, left: 0}}></Text>
        <Image
      source={{uri: 'https://i.imgur.com/9h8ZyXd.png'}}       style={{width: 350, height: 650 }}

      />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
      style={{
        width: '100%', height: '100%'}}
      source={{uri: 'https://i.imgur.com/adiavFt.png'}}
      />
      </View>
    );
  }
}

class AllPaths extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
      style={{width: '100%', height: '100%'}}
      source={{uri: 'https://i.ibb.co/LSkdqGR/Login.png'}}
      />
        <Text style={{position: "absolute", top: 20}}></Text>
      </View>
    );
  }
}

class RewardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
      style={{width: '100%', height: '110%'}}
      source={{uri: 'https://i.imgur.com/otV771P.png'}}
      />
        <Text style={{position: "absolute", top: 20}}></Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Explore: AllPaths,
  Paths: PathScreen,
  Map: MapScreen,
  Profile: ProfileScreen,
  Rewards: RewardScreen
  
});

export default createAppContainer(TabNavigator);
