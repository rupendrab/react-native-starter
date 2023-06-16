import React, { useState } from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    /*
    const colorsView = colors.map((color) => {
        return <View style={ {height: 100, width: 100, backgroundColor: color}}/>
    })
    */

    // console.log(colors)

    return (
        <View>
            <Button 
                title="Add a Color"
                onPress={() => {
                    setColors([
                        ...colors,
                        randomRgb()
                    ])
                }}
            />
            <FlatList 
                keyExtractor={item => item}
                data={colors} 
                renderItem={({ item }) => {
                    /* element === {item: {name: "Friend #1"}, index: 0} */
                    return <View style={ {height: 100, width: 100, backgroundColor: item}}/>
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

});

export default ColorScreen;
