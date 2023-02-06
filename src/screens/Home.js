import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, TextInput, Button, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../assets/css/styles';

class Home extends Component {

  state = {
    title: '',
    posts: []
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
      posts: JSON.parse(posts)
    })
  }


  output = () => {
    return ( 
     <FlatList style = { css.postContainer }
       data = {this.state.posts}
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
        <View style={css.app}>
          {this.output()}
        </View>
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
});

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPost(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)