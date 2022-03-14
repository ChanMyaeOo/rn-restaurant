import { useState } from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import { StatusBar } from "expo-status-bar";
import Categories from "./src/components/Categories";
import Restaurants from './src/components/Restaurants'
export default function App() {
    const categories = [
        {
            name: "Burger",
            imageUrl: require("./src/assets/images/burger.png"),
        },
        {
            name: "Pizza",
            imageUrl: require("./src/assets/images/pizza.png"),
        },
        {
            name: "Dessert",
            imageUrl: require("./src/assets/images/cake.png"),
        },
        {
            name: "Drinks",
            imageUrl: require("./src/assets/images/smoothies.png"),
        },
        {
            name: "Steak",
            imageUrl: require("./src/assets/images/steak.png"),
        },
        {
            name: "Pasta",
            imageUrl: require("./src/assets/images/pasta.png"),
        },
    ];

    const [term, setTerm] = useState("burger");
    return (
        <View>
            <Header />
            <Search setTerm={setTerm} />
            <Categories categories={categories} term={term} setTerm={setTerm} />
            <Restaurants term={term} />
            <StatusBar />
        </View>
    );
}
