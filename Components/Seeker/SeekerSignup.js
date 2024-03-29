import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { NavigationProp } from '@react-navigation/native';
import { FIRESTORE_DB } from '../../FirebaseConfig';
export const SeekerSignup=(props)=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [aadharno,setAadharno]=useState('');
    const addSeeker=async()=>{
        try{
            const docRef= await addDoc(collection(FIRESTORE_DB,'Seeker'),{
                name:name,
                phone:phone,
                address:address,
                aadharno:aadharno
            });
            console.log("seeker added with document id : ", docRef.id);
            props.navigation.navigate("ApprovedEventsSeeker")
        }
        catch(e){
            console.error('error adding document: '+e);
        }
    }
    
    return (
        <View style={styles.container}>
            <TextInput value={name} style={styles.input} placeholder="Name" autoCapitalize="none" onChangeText={(text)=>setName(text)}></TextInput>
            <TextInput value={phone} style={styles.input} placeholder="Phone" autoCapitalize="none" onChangeText={(text)=>setPhone(text)}></TextInput>
            <TextInput value={address} style={styles.input} placeholder="Address" autoCapitalize="none" onChangeText={(text)=>setAddress(text)}></TextInput>
            <TextInput value={aadharno} style={styles.input} placeholder="Aadhar number" autoCapitalize="none" onChangeText={(text)=>setAadharno(text)}></TextInput>
            <TouchableOpacity
      onPress={()=>addSeeker()}
      >
        <Text
        style={styles.button_save}
        >Save</Text>
      </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1,
        justifyContent:'center'
    },
    input:{
        marginTop:20,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:"#fff",
        width: 250,
    },
    button_save:{
        backgroundColor:'#36c2cf',
        color:"#fff",
        margin:10,
        padding:15,
        fontSize:20,
        textAlign:'center',
        borderRadius:20,

    }
});