import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';

const InputButton = (props) => {
    
    return(
        <View>
            <View style={styles.inputContainer}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onType} />
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
                    <Text style={styles.title}>{props.myTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InputButton;

const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: '#eceff1',
      padding: 10,
      margin: 10,
      borderRadius: 5,
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
  