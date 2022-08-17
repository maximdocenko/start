import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, TextInput, Button, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';
import AsyncStorage from '@react-native-async-storage/async-storage'

class Home extends Component {

  state = {
    title: '',
    places: []
  }

  componentDidMount() {
    this.doTask()
  }

  componentDidUpdate() {
    this.doTask()
  }

  doTask = async () => {    
    let posts = await AsyncStorage.getItem('posts');
    this.setState({
      places: JSON.parse(posts)
    })
  }


  output = () => {
    return ( 
     <FlatList style = { styles.postContainer }
       data = {this.state.places}
       keyExtractor={(item, index) => index.toString()}
       renderItem = { info => (
         <ListItem 
           title={ info.item.title }
           status={ info.item.status }
           description={ info.item.description }
           image={ info.item.image }
           date={ info.item.date }
         />
       )}
     />
   )
 }
 
render() {
  return (
    <View style={ styles.container }>
        <StatusBar hidden />
        <View style={styles.app}>
          {this.output()}
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPost')} style={styles.button}>
                <Text style={styles.buttonText}>New Post</Text>
            </TouchableOpacity>
        </View>
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  app: {
    height: Dimensions.get('window').height - 150,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  postContainer: {
    width: '100%'
  },
  content: {
    width: Dimensions.get('window').width - 176
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#151C26'
  },
  bottom: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    padding: 12,
    backgroundColor: '#0071D8',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 25,
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)