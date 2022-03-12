import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={25} />
            <TextInput style={styles.input} placeholder="Restaurants, food" />
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
