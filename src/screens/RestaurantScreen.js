import { useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import useRestaurant from "../hooks/useRestaurant";
export default function RestaurantScreen({ navigation }) {
    const id = navigation.getParam("id");
    const [{ loading, data, error }, searchRestaurant] = useRestaurant();

    const dimensions = Dimensions.get("window");
    const imageWidth = dimensions.width;
    const imageHeight = Math.round((dimensions.width * 9) / 16);

    useEffect(() => {
        searchRestaurant(id);
    }, []);

    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Something went wrong!</Text>;
    return (
        <View>
            {data && (
                <FlatList
                    data={data.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ height: imageHeight, width: imageWidth }}
                        />
                    )}
                />
            )}
        </View>
    );
}
