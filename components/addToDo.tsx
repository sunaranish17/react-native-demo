import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo() {
    const [text, setText] = useState("");

    const changeHandler = (val: string) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                placeholder="New ToDo..."
                onChangeText={changeHandler}
                style={styles.input}
            />
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