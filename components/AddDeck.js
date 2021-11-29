import React from 'react';
import { View, Text, Button, Stylesheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddDeck extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        text:''
    }

    handleOnChangeText(e) {
        this.setState({text:e})
        console.log('Text Value:', this.state.text)
    }
    render() {

        // const navigtion = props.navigtion;
        return(
            <View style={[appStyles.container, {justifyContent: "space-evenly", flex: 1}]}>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Text style={{margin: 10}}>What is the title of your new deck?</Text>
                    <TextInput onChangeText={(e)=> this.handleOnChangeText(e)} value={this.state.text} style={{margin: 10}} placeholder="Deck Title"/>
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TouchableOpacity style={{ margin: 10, padding: 10, marginHorizontal:30, backgroundColor: blue }}>
                        <Text style={{color: white}} >Create Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default AddDeck;