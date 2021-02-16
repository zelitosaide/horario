



/*

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const add = (n) => {
  return n + 5;
}

let a = [2, 4, 7];

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Detais... again"
        // onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
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

*/






































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          // 1. Navigate to the Details route with params
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Anything you want here'
          });
        }}
      />
    </View>
  );
}


function DetailsScreen({ route, navigation}) {
  // 2. Get the param 
  const { itemId } = route.params;
  const { otherParam } = route.params;

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: { JSON.stringify(itemId) }</Text>
      <Text>otherParam: { JSON.stringify(otherParam) }</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParam: otherParam
        })}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/





































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TextInput } from 'react-native';


function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if(route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: { route.params?.post} </Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return(
    <>
      <TextInput
        multiline
        placeholder="What is on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white'}}
        value={ postText }
        onChangeText={ setPostText }
      />
      <Button 
        title="Done"
        onPress={() => 
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText })
        }
      />
    </>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="CreatePost" component={ CreatePostScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/





































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header'})
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack() } />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name="Home"
          component={ HomeScreen }
          options={{ title: 'My home'}}
        />
        <Stack.Screen
          name="Profile"
          component={ ProfileScreen }
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/






































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';


function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>  
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated'})}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  
            name="Home"
            component={ HomeScreen }
            options={{ title: 'My home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
*/






































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';


function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/





































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen 
          name="Home"
          component={ HomeScreen }
          options={{ title: 'My home'}}
        />
        <Stack.Screen
          name="Details"
          component={ DetailsScreen }
          options={{ title: 'My Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

*/





































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image } from 'react-native';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('./assets/react-native-logo.79778b9e.png')}
    />
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/




































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image } from 'react-native';


const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <View>
      <Image 
        style={{ width: 30, height: 30 }}
        source={require('./assets/react-native-logo.79778b9e.png')}
      />
    </View>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button 
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/





































/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button } from 'react-native';


function LogoTitle() {
  return(
    <Image
      style={{ width: 30, height: 30 }}
      source={require('./assets/react-native-logo.79778b9e.png')}
    />
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Update count"
          onPress={() => setCount(prevState => prevState + 1)}
        />
      )
    });
  }, [navigation, setCount]);

  return <Text>Count: { count }</Text>
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoTitle {...props} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/








































import React, {useReducer } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity
} from 'react-native';


function List({ items, onPressItem }) {
  return(
    <FlatList
      data={ items }
      keyExtractor={(item) => item.id }
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.item, {backgroundColor: itemColor(index)}]}
          onPress={() => onPressItem(item.id)}
        >
          <Text style={styles.title}> {item.title} </Text>
        </TouchableOpacity>
      )}
    />
  );
}

function itemColor(index) {
  return `rgba(59, 108, 212, ${Math.max(1 - index / 10, 0.4)})`
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 1,
    padding: 15
  },
  title: {
    color: 'white'
  }
});
