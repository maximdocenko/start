import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AddPost from './src/screens/AddPost';

const Stack = createNativeStackNavigator();

function Logo() {
  return (
      <Image
        style={{ width: 24, height: 24 }}
        source={require('./assets/img/Logo.png')}
      />
  );
}

function Title(props) {
  return (
      <View><Text style={styles.title}>{props.title}</Text></View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Logo/>, headerTitleAlign: "center" }} />
        <Stack.Screen name="AddPost" component={AddPost} options={{ headerTitle: () => <Title title={'Create New Post'} />, headerTitleAlign: "center" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: '#151C26',
  }
})

export default App;