import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* To Do Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={(item: any) => (
              <Text>{item?.text}</Text>
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
