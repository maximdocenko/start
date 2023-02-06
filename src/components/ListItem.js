import React from 'react';
import { View, Text, Image } from 'react-native';
import { css } from '../assets/css/styles';

const ListItem = (props) => {
    return (
      <View style={css.post}>
          <View style={[css.top, css.row]}>
            {props.image?<Image style={css.image} source={{uri: props.image.uri}}/>:null}
            <View style={css.content}>
              <Text style={css.title}>{props.title}</Text>
              <Text style={[css.date, {color: '#8A8C90'}]}>Created at: <Text style={css.date}>{props.date}</Text></Text>
              <View style={css.row}>
                <Text style={[css.status, props.status == 'Published' ? css.published : css.draft]}>{props.status}</Text>
              </View>
            </View>
          </View>
          <View style={css.bottom}>
            <Text style={css.text}>{props.description}</Text>
          </View>
        </View>
    );
}

export default ListItem;