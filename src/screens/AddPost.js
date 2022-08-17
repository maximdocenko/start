import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Dimensions, TextInput, NativeModules, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';
import {Picker} from '@react-native-picker/picker';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage'

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
        <TouchableOpacity style={styles.delete} onPress={this.clean.bind(this)}>
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
    <View style={ styles.container}>
       <StatusBar hidden />
        <ScrollView>
        <View style={styles.app}>
                <Text>{this.state.valid}</Text>
                <View style = { styles.inputContainer}>
                    <TextInput
                    placeholder="Title"
                    style={styles.placeInput}
                    value={this.state.title}
                    onChangeText={(value) => this.setState({title: value, errorTitle: 0})}
                    ></TextInput>
                    {this.state.errorTitle ? <Text style={styles.error}>This field is required</Text> : null}
                    <View style={[styles.placeInput, styles.placePicker]}>
                        <Picker
                                style={styles.picker}
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
                    {this.state.errorStatus ? <Text style={styles.error}>This field is required</Text> : null}
                    <TextInput
                    placeholder="Description"
                    multiline={true}
                    style={[styles.placeInput, styles.placeTextarea]}
                    value={this.state.description}
                    onChangeText={(value) => this.setState({description: value, errorDescription: 0})}
                    ></TextInput>
                    {this.state.errorDescription ? <Text style={styles.error}>This field is required</Text> : null}
                </View>
                <View style = { styles.inputContainer}>
                    <Text style={styles.label}>Photo</Text>
                    <TouchableOpacity onPress={this.pick.bind(this)}>
                        <View style={styles.imagePircker}>
                            {this.state.image ? this.renderImage(this.state.image) : <Image
                                style={{ width: 32, height: 32 }}
                                source={require('../../assets/img/icon.png')}
                            />}
                        </View>
                    </TouchableOpacity>
                    {this.state.errorImage ? <Text style={styles.error}>This field is required</Text> : null}
                </View>
                
            
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={this.submit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 12
  },
  placeInput: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    height: 58,
    width: '100%',
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#8A8C90',
    marginBottom: 8
  },
  placePicker: {
    marginBottom: 12,
    paddingHorizontal: 0, 
    paddingVertical: 0
  },
  placeTextarea: {
    height: 116, 
    textAlignVertical: 'top'
  },
  picker: {
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#8A8C90',
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  },
  post: {
    padding: 16,
    paddingBottom: 18,
    backgroundColor: '#fff',
    marginTop: 12
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  top: {
    marginBottom: 16
  },
  title: {
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: '#151C26',
    marginBottom: 12,
  },
  date: {
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#151C26',
    marginBottom: 12
  },
  status: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    borderRadius: 8,
  },
  published: {
    backgroundColor: 'rgba(16, 193, 55, 0.1)',
    color: '#10C137'
  },
  draft: {
    backgroundColor: 'rgba(217, 22, 22, 0.1)',
    color: '#D91616'
  },
  image: {
    marginRight: 16,
    width: 128,
    height: 128
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
  },
  imagePircker: {
    width: 80,
    height: 80,
    backgroundColor: '#F2F3F3',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontFamily: 'Lato-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: '#151C26',
    marginBottom: 18,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 7
  },
  delete: {
    zIndex: 3,
    elevation: 3,
    position: 'absolute', 
    top: 0, 
    right: 0,
    borderRadius: 24,
    borderColor: '#fff',
    borderWidth: 2
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)