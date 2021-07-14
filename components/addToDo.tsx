import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo({ submitHandler }: any) {
    const [text, setText] = useState("");

    const changeHandler = (val: string) => {
        setText(val);
    }

    const addTodo = () => {
        submitHandler(text);
        setText("");
    }

    return (
        <View>
            <TextInput
                placeholder="New ToDo..."
                onChangeText={changeHandler}
                style={styles.input}
                value={text}
            />

            <Button onPress={addTodo} title="Add ToDo" color="coral" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
});