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
            "odometer": this.state.odometer,
            "cars": []
        }
        // THIS IS WHERE WE ADD TO DATABASE
        // 1. make a REQUEST call to the backend
        // 2. backend will talk to DB
        // http://localhost:3000/cars/new
        // handle RESPONSE from server (and any errors)

        createNewCar(carDetails)
    }

    fetchAllCars = async () => {
       

       const allCars = await getAllCars()
       this.setState({cars: allCars})
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
                <Button title="Get All" onPress={this.fetchAllCars}/>
                {(this.state.cars)?(this.state.cars.map((car) => 
                <View style={styles.individual} key={car.car_id}>
                <Text style={{fontSize: 25}}>
                    {car.make} - {car.model} {car.year}
                </Text>
                <Text >
                    This car has {car.odometer} miles on it.
                </Text>
                <Text >
                     {car.car_id}
                </Text>
                </View>)):(<></>)}

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

async function getAllCars(){
 

    return fetch('http://localhost:3000/cars/all', {
        method:'GET',
        withCredentials: true,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Control-Allow-Headers":"*",
            "admin":'true',
            "Access-Control-Allow-Origin":"http://localhost:3000/*"
        }
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
    individual:{
        backgroundColor: "white",
        borderRadius: "5%",
        minWidth: "65%",
        margin: "5%",
        padding: "5%"        
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

