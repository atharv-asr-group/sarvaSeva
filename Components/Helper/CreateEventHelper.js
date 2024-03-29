import { useState } from 'react';
import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet} from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';
export const HelperEventCreation=(props)=>{
    const id=props.route.params.id.id;
    console.log(id);
    const [eventName,setEventName]=useState('');
    const [eventTime,setEventTime]=useState('');
    const [eventEndTime,setEventEndTime]=useState('');
    const [eventDate,setEventDate]=useState('');
    const [eventType,setEventType]=useState('');
    const [eventVenue,setEventVenue]=useState('');
    
    const addEvent=async()=>{
        try{
            const docRef=await addDoc(collection(FIRESTORE_DB,'Event'),{
                eventName:eventName,
                eventTime:eventTime,
                eventEndTime:eventEndTime,
                eventDate:eventDate,
                eventType:eventType,
                eventVenue:eventVenue,
                eventPublished:false,
                eventVolunteers:[id]
            });
            console.log('event added with id: ',docRef.id);
            console.log('event added by volunteer id: ',id);
        }
        catch(e){
            console.log('error adding event: ',e);
        }
    };
    
    return (
        <View style={styles.container}>
            <TextInput value={eventName} style={styles.input} placeholder="Event Name" autoCapitalize="none" onChangeText={(text)=>setEventName(text)}></TextInput>
            <TextInput value={eventDate} style={styles.input} placeholder="Event date" autoCapitalize="none" onChangeText={(text)=>setEventDate(text)}></TextInput>
            <TextInput value={eventTime} style={styles.input} placeholder="Event start time" autoCapitalize="none" onChangeText={(text)=>setEventTime(text)}></TextInput>
            <TextInput value={eventEndTime} style={styles.input} placeholder="Event end time" autoCapitalize="none" onChangeText={(text)=>setEventEndTime(text)}></TextInput>
            <TextInput value={eventType} style={styles.input} placeholder="Event type" autoCapitalize="none" onChangeText={(text)=>setEventType(text)}></TextInput>
            <TextInput value={eventVenue} style={styles.input} placeholder="Event Venue" autoCapitalize="none" onChangeText={(text)=>setEventVenue(text)}></TextInput>

            <Button title="Add event" onPress={addEvent}/>
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
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:"#fff"
    }
});
