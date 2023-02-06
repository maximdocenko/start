import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AddPost from './src/screens/AddPost';
import { css } from './src/assets/css/styles';

const Stack = createNativeStackNavigator();

function Logo() {
  return (
      <Image
        style={{ width: 24, height: 24 }}
        source={require('./src/assets/img/Logo.png')}
      />
  );
}

function Title(props) {
  return (
      <View><Text style={css.title}>{props.title}</Text></View>
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

export default App;