import { View, Text, StyleSheet, Image } from 'react-native'
export default function CategoryList({ name, imageUrl, index }) {
    return(
        <View style={[styles.container, index === 0 ? {marginLeft: 25} : {marginLeft: 15}]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imageUrl}/>
            </View>
            <Text style={styles.header}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        elevation: 3
    },
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontWeight: 'bold',
    }
})