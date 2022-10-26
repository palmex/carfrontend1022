import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Cars extends React.Component{

    constructor(){
        super(); 
        this.state = {buttonText : "ON"}
        this.state = {buttonBool : true}
    }


    doSomething = () => {
        console.log('Button Pressed')
        this.setState({buttonBool: !this.state.buttonBool})
        if(this.state.buttonBool){
            this.setState({buttonText: "ON"})
        } else {
            this.setState({buttonText: "OFF"})
        }
        
    }

    render(){
        return(
            <View style={styles.cars}>
                <Text>Car Component</Text>
                <Button title={this.state.buttonText} onPress={this.doSomething}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    cars: {
      flex: 1,
      backgroundColor: '#BBB',
      alignItems: 'center',
      width: '75%',
      margin: '5%',
      padding: '5%',
      
      justifyContent: 'center',
    }
});

