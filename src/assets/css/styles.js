import { StyleSheet, Dimensions } from "react-native";

const css = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5'
      },
      app: {
        height: Dimensions.get('window').height - 150,
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
      postContainer: {
        width: '100%'
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
})

export { css }