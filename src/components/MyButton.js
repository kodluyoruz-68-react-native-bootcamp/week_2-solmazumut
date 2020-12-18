import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
    return(
        <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
                <Text style={styles.title}>{props.myTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 20,
      },
      buttonContainer: {
        backgroundColor: 'red',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
      },
      title: {
        margin: -10,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
      }
});