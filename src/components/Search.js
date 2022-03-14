import { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Search({ setTerm }) {
    const [input, setInput] = useState('')
    const handleOnChangeText = (text) => {
        setInput(text)
    }
    const handleOnEndEditing = () => {
        if(!input) return
        setTerm(input)
        setInput('')
    }
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={25} />
            <TextInput value={input} style={styles.input} placeholder="Restaurants, food" onChangeText={(text) => handleOnChangeText(text)} onEndEditing={handleOnEndEditing} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: "#fff",
        elevation: 3,
        padding: 10,
        borderRadius: 40
    },
    input: {
        fontSize: 20,
        marginLeft: 8
    }
});
