import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ImageBackground,Image } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
            <View style = {styles.container}>
            <View style={{alignItems: 'center'}}>
            <Text style={{fontSize:30,color:"#2A2A2A"}}>Wellcome HP LOGIN</Text>
            <Image source={require('./logo.png')} style={{width: 50, height: 50}}/>
            <Text style={{fontSize:20,color:"#2A2A2A"}}>User Login</Text>
            </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#2A2A2A"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#2A2A2A"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => this.login(this.state.email, this.state.password)}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 50
   },
   input: {
      margin: 15,
      height: 40,
      paddingLeft:20,
      borderColor: '#626163',
      borderWidth: 1,
      borderRadius: 10,
   },
   submitButton: {
     backgroundColor: '#626163',
     opacity: 0.7,
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
      borderRadius: 10,
   },
   submitButtonText:{
      color: 'black',
      fontSize:15,
   }
})