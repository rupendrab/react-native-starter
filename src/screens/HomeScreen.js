import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Rupen's Home Screen</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => {
          console.log("Button Pressed!")
          navigation.navigate('Components')
        }}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => {
          console.log("Button Pressed!")
          navigation.navigate('List')
        }}
      />
      <Button 
        title="Go to Image Demo"
        onPress={() => {
          console.log("Button Pressed!")
          navigation.navigate('Image')
        }}
      />
      {/*
      <TouchableOpacity onPress={() => {
        console.log('List Pressed!')
        props.navigation.navigate('List')
      }}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#0000ff',
  },
});

export default HomeScreen;
