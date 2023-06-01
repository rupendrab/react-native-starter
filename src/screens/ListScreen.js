import React from "react";
import {Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Friend #1", age: 20},
        {name: "Friend #2", age: 21},
        {name: "Friend #3", age: 22},
        {name: "Friend #4", age: 41},
        {name: "Friend #5", age: 42},
        {name: "Friend #6", age: 44},
        {name: "Friend #7", age: 21},
        {name: "Friend #8", age: 34},
        {name: "Friend #9", age: 91},
    ];

    return (
        <FlatList 
            /*
            horizontal
            showsHorizontalScrollIndicator={false}
            */
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                /* element === {item: {name: "Friend #1"}, index: 0} */
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
