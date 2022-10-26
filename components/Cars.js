import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cars extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            buttonText : "ON",
            buttonBool : true,
            make       : "",
            
        }
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
        console.log(this.state.make)
        return(
            <View style={styles.cars}>
                <Text style={styles.title}>New Car Submission Form </Text>
                
                <View style={styles.subField}>
                <Text>Make</Text>
                <TextInput
                    style={styles.textInput}
                    defaultValue={this.state.make}
                    onChangeText={(e) => this.setState({make: e})}
                
                ></TextInput>
                </View>
                {/* <Button title={this.state.buttonText} onPress={this.doSomething}/> */}
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
    },
    title: {
      color:'#000',
      fontSize: 18
    },
    textInput: {
        backgroundColor:'#FFF',
        borderWidth: '1px',
        borderType: 'solid',
        borderColor: '#FFF',
        borderRadius: '4px',
        marginTop: '3%'
      },
    subField: {
        margin: '3%'
    }
});

