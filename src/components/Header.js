import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>Delicous meal!</Text>
            <StatusBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 60,
    },
    lightHeader: {
      fontSize: 35
    },
    boldHeader: {
      fontSize: 40,
      fontWeight: 'bold'
    }
});