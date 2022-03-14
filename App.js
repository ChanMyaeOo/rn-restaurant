import { View, FlatList } from 'react-native'
import Header from './src/components/Header'
import Search from './src/components/Search'
import CategoryList from './src/components/CategoryList'
import { StatusBar } from 'expo-status-bar';
export default function App() {
    const categories = [
      {
        name: "Burger",
        imageUrl: require('./src/assets/images/burger.png')
      },
      {
        name: "Pizza",
        imageUrl: require('./src/assets/images/pizza.png')
      },
      {
        name: "Dessert",
        imageUrl: require('./src/assets/images/cake.png')
      },
      {
        name: "Drinks",
        imageUrl: require('./src/assets/images/smoothies.png')
      },
      {
        name: "Steak",
        imageUrl: require('./src/assets/images/steak.png')
      },
      {
        name: "Pasta",
        imageUrl: require('./src/assets/images/pasta.png')
      },
    ]
    return (
        <View>
          <Header/>
          <Search />
          {/* <CategoryList name="Burger" imageUrl={require('./src/assets/images/burger.png')}/> */}
          
          <FlatList 
            data={categories}
            renderItem={({ item, index }) => {
              return(
                <CategoryList name={item.name} imageUrl={item.imageUrl} index={index} />
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category) => category.name }
          />
          
          <StatusBar />
        </View>
    );
}


