import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'
import { useEffect } from 'react'
import RestaurantItem from './RestaurantItem'

export default function Restaurants({ term }) {    
    const [{loading, data, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    console.log({ loading, data, error})

    if(loading) return <ActivityIndicator size="large" marginVertical={30} color="#0000ff"/>

    if(error) return(
        <View style={styles.container}>
          <Text style={styles.header}>
              {error}
          </Text>
      </View>
    )
    
    return(
      <View style={styles.container}>
          <Text style={styles.header}>
              Top Restaurants
          </Text>
          <FlatList 
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({ item }) => <RestaurantItem restaurant={item}/>}
            showsVerticalScrollIndicator={false}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})