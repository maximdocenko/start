import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/styles';

const Footer = (props) => {
    return (
        <View style={css.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddPost')} style={css.button}>
                <Text style={css.buttonText}>New Post</Text>
            </TouchableOpacity>
        </View>   
    );
}

export default Footer;