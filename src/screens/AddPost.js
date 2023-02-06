import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image, Dimensions, TextInput, NativeModules, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import {Picker} from '@react-native-picker/picker';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { css } from '../assets/css/styles';

var ImagePicker = NativeModules.ImageCropPicker;

class AddPost extends React.Component {

    constructor() {
        super();
        this.state = {
            image: '',
            title: '',
            status: '',
            description: '',
        };
    }

    doTask = async (obj) => { 
      posts =  await AsyncStorage.getItem('posts');
      if(posts == null) {
        var array = [obj]
      }else{
        var array = [...[obj], ...JSON.parse(posts)]
      }
      //console.log(array)
      await AsyncStorage.setItem('posts', JSON.stringify(array));
      this.props.navigation.navigate('Home', {post: obj})
    }

  submit = () => {

    obj = {
      title: this.state.title, 
      status: this.state.status,
      description: this.state.description,
      image: this.state.image,
      date: Moment().format('MM/DD/YY hh:mm:ss a')
    };
    this.props.add(obj);
    this.doTask(obj);
   
}

clean() {
    ImagePicker.clean().then(() => {
        this.setState({
          image: null
        })
        
    }).catch(e => {
        alert(e);
    });
}

  pick() {
      ImagePicker.openPicker({
          multiple: false,
          waitAnimationEnd: false,
          includeExif: true,
          forceJpg: true,
      }).then(image => {
          this.setState({
              image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
              errorImage: 0
          });
      }).catch(e => alert(e));
  }

  renderImage(image) {    
    return <View>
        <TouchableOpacity style={css.delete} onPress={this.clean.bind(this)}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../assets/img/delete.png')}
          />
        </TouchableOpacity>
        <Image style={{width: 80, height: 80, resizeMode: 'cover'}} source={{uri: image.uri}}/>
      </View>
  }

render() {
    
  return (
    <View style={ css.container}>
       <StatusBar hidden />
        <ScrollView>
        <View style={css.app}>
                <Text>{this.state.valid}</Text>
                <View style = { css.inputContainer}>
                    <TextInput
                    placeholder="Title"
                    style={css.placeInput}
                    value={this.state.title}
                    onChangeText={(value) => this.setState({title: value, errorTitle: 0})}
                    ></TextInput>
                    {this.state.errorTitle ? <Text style={css.error}>This field is required</Text> : null}
                    <View style={[css.placeInput, css.placePicker]}>
                        <Picker
                                style={css.picker}
                                selectedValue={this.state.status}
                                onValueChange={(value) => this.setState({
                                    status: value,
                                    errorStatus: 0
                                })}
                            >
                            <Picker.Item label="Select status" value="" />
                            <Picker.Item label="Published" value="Published" />
                            <Picker.Item label="Draft" value="Draft" />
                        </Picker>
                    </View>
                    {this.state.errorStatus ? <Text style={css.error}>This field is required</Text> : null}
                    <TextInput
                    placeholder="Description"
                    multiline={true}
                    style={[css.placeInput, css.placeTextarea]}
                    value={this.state.description}
                    onChangeText={(value) => this.setState({description: value, errorDescription: 0})}
                    ></TextInput>
                    {this.state.errorDescription ? <Text style={css.error}>This field is required</Text> : null}
                </View>
                <View style = { css.inputContainer}>
                    <Text style={css.label}>Photo</Text>
                    <TouchableOpacity onPress={this.pick.bind(this)}>
                        <View style={css.imagePircker}>
                            {this.state.image ? this.renderImage(this.state.image) : <Image
                                style={{ width: 32, height: 32 }}
                                source={require('../../assets/img/icon.png')}
                            />}
                        </View>
                    </TouchableOpacity>
                    {this.state.errorImage ? <Text style={css.error}>This field is required</Text> : null}
                </View>
                
            
        </View>
        <View style={css.footer}>
            <TouchableOpacity onPress={this.submit} style={css.button}>
                <Text style={css.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>        
        </ScrollView>
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)