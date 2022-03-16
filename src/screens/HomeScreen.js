import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

export default function HomeScreen() {
    const categories = [
        {
            name: "Burger",
            imageUrl: require("../assets/images/burger.png"),
        },
        {
            name: "Pizza",
            imageUrl: require("../assets/images/pizza.png"),
        },
        {
            name: "Dessert",
            imageUrl: require("../assets/images/cake.png"),
        },
        {
            name: "Drinks",
            imageUrl: require("../assets/images/smoothies.png"),
        },
        {
            name: "Steak",
            imageUrl: require("../assets/images/steak.png"),
        },
        {
            name: "Pasta",
            imageUrl: require("../assets/images/pasta.png"),
        },
    ];

    const [term, setTerm] = useState("burger");
    return(
        <View>
            <Header />
            <Search setTerm={setTerm} />
            <Categories categories={categories} term={term} setTerm={setTerm} />
            <Restaurants term={term} />
            <StatusBar />
        </View>
    )
}