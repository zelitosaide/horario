






import React, { Component } from 'react';
import { View, Text } from 'react-native';

const add = (n) => {
  return n + 5;
}

let a = [2, 4, 7];

class App extends Component {
  render() {
    return(
      <View>
        <Text>Ola, { add(0) }</Text>
        <Text>Ola, { a.map((n) => {
          return n + 4
        })}</Text>
      </View>
    );
  }
}

export default App;
