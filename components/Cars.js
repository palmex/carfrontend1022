import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default class Cars extends React.Component{

    constructor(){
        super(); 
    }

    render(){
        return(
            <View style={styles.cars}>
                <Text>Car Component</Text>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    cars: {
      flex: 1,
      backgroundColor: '#BBB',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

