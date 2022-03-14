import { View, Text, Image, StyleSheet } from "react-native";
export default RestaurantItem = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: restaurant.image_url }}
            />
            <View>
                <Text style={styles.header}>{restaurant.name}</Text>
                <View style={styles.infoContainer}>
                    <Text>{restaurant.rating} stars &nbsp;</Text>
                    <Text style={styles.money}>{restaurant.price}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        marginVertical: 15,
        flexDirection: "row",
        borderRadius: 50,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginRight: 15,
    },
    infoContainer: {
        flexDirection: "row",
    },
    header: {
        fontWeight: "bold",
    },
    money: {
        color: "gold",
    },
});
