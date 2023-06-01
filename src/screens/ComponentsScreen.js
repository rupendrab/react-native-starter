import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Rupen";

    return (
        <View>
            <Text style={styles.textStyleHeader}>
                Getting started with React Native!
            </Text>
            <Text style={styles.textStyleSubheader}>
                My name is {name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyleHeader: {
        fontSize: 45
    },
    textStyleSubheader: {
        fontSize: 20
    },
});

export default ComponentsScreen;



