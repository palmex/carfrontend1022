import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cars extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            buttonText : "ON",
            buttonBool : true,
            make       : "",
            model      : "",
            year       : "",
            odometer   : "",
        }
    }


    // doSomething = () => {
    //     console.log('Button Pressed')

    //     this.setState({buttonBool: !this.state.buttonBool})
        
    //     if(this.state.buttonBool){
    //         this.setState({buttonText: "ON"})
    //     } else {
    //         this.setState({buttonText: "OFF"})
    //     }
        
    // }

    submitNewCar = () => {
        console.log(this.state)

        let carDetails = {
            "make": this.state.make,
            "model": this.state.model,
            "year": this.state.year,
            "odometer": this.state.odometer
        }
        // THIS IS WHERE WE ADD TO DATABASE
        // 1. make a REQUEST call to the backend
        // 2. backend will talk to DB
        // http://localhost:3000/cars/new
        // handle RESPONSE from server (and any errors)

        createNewCar(carDetails)
    }

    render(){
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

                <View style={styles.subField}>
                <Text>Model</Text>
                <TextInput
                    style={styles.textInput}
                    defaultValue={this.state.model}
                    onChangeText={(e) => this.setState({model: e})}
                ></TextInput>
                </View>

                <View style={styles.subField}>
                <Text>Year</Text>
                <TextInput
                    style={styles.textInput}
                    defaultValue={this.state.year}
                    onChangeText={(e) => this.setState({year: e})}
                ></TextInput>
                </View>

                <View style={styles.subField}>
                <Text>Odometer</Text>
                <TextInput
                    style={styles.textInput}
                    defaultValue={this.state.odometer}
                    onChangeText={(e) => this.setState({odometer: e})}
                ></TextInput>
                </View>
                <Button color="#BE8D34" title="Submit" onPress={this.submitNewCar}></Button>
                {/* <Button title={this.state.buttonText} onPress={this.doSomething}/> */}
            </View>
        )
    }
};

async function createNewCar(carDetails){
    console.log("carDetails:",carDetails)

    return fetch('http://localhost:3000/cars/new', {
        method:'POST',
        withCredentials: true,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Headers":"*",
            "Access-Control-Allow-Origin":"http://localhost:3000/*"
        },
        body: JSON.stringify(carDetails)
    }).then(response => {
        if (response.ok){
            var newCar = response.json()
            console.log(newCar)
            return newCar
        }

        else {
            var error = new Error('Error' + response.status + ":" + response.statusText)
            error.response = response 
            return error
        }
    },
    error => {
        var errmess = new Error(error.message)
        throw errmess
    }
    )
}

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

