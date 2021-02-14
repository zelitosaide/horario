





import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const add = (n) => {
  return n + 5;
}

let a = [2, 4, 7];

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={ HomeScreen} 
            options={{title: 'Overview'}}
          />
          <Stack.Screen 
            name="Details" 
            component={ DetailsScreen }
            options={{title: 'Sobre nos'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
