import { FlatList } from 'react-native'
import CategoryList from './CategoryList';

export default function Categories({ categories, term, setTerm}) {
    return(
        <FlatList
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <CategoryList
                            name={item.name}
                            imageUrl={item.imageUrl}
                            index={index}
                            active={
                                item.name.toLocaleLowerCase() ===
                                term.toLocaleLowerCase()
                            }
                            handleOnPress={() => setTerm(item.name)}
                        />
                    );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(category) => category.name}
            />
    )
}