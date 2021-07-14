import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddToDo from './components/addToDo';
import Header from "./components/header";
import ToDoItem from './components/todoitem';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key: any) => {
    setTodos((prevToDo) => {
      return prevToDo.filter(todo => todo.key != key)
    })
  };

  const submitHandler = (text: any) => {
    setTodos((prevToDos) => {
      return [
        ...prevToDos,
        { text: text, key: Math.random().toString() }
      ]
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* To Do Form */}
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              // <Text>{item?.text}</Text>
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

export default App;
