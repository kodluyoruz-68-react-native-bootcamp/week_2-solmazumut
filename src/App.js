import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import MyButton from './components/MyButton';
import InputButton from './components/InputButton';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todoList, setTodoList] = useState([{title: "Ornek gorev", active: 2}]);
  const [inputText, setInputText] = useState('');

  const renderItem=({item}) => {
    return(
    
      <MyButton
          myTitle={item.title}
          myNumber={5}
          myPress={() => alert('Selam Ezran')}
          onSend={(val) => alert('Value is: ' + val)}
          myHeader={<Text>TEXT</Text>}>
      </MyButton>
     
    );
  };

  function addTodoList() {
    if(inputText != "") {
      let item ={
        title: inputText,
        active: 2,
      }

      setInputText('');
      setTodoList([...todoList, item]);
    }
    
  }

  return (
    <SafeAreaView stlye={styles.container}>

        <Text style={{fontSize: 50, color: 'red'}}>TODO</Text>

        <FlatList 
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <InputButton style={styles.input}
          placeholder="Todo giriniz"
          onType={(text)=> setInputText(text)}
          myTitle={"Ekle"}
          myPress={() => addTodoList()}
        />

    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  input: {
    position: 'absolute',
    bottom: 20,
  }
});
