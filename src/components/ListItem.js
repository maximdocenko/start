import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
      <View style={styles.post}>
          <View style={[styles.top, styles.row]}>
            {props.image?<Image style={styles.image} source={{uri: props.image.uri}}/>:null}
            <View style={styles.content}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={[styles.date, {color: '#8A8C90'}]}>Created at: <Text style={styles.date}>{props.date}</Text></Text>
              <View style={styles.row}>
                <Text style={[styles.status, props.status == 'Published' ? styles.published : styles.draft]}>{props.status}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>{props.description}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    height: 128,
    resizeMode: 'cover'
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
});

export default ListItem;