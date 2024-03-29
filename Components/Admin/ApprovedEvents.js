import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
const ApprovedEvents=(props)=>{
    const [events,setEvents]=useState([]);
    const [approvedEvents,setApprovedEvents]=useState([]);
    var approvedEvent=[];

    useEffect(()=>{
        const eventRef=collection(FIRESTORE_DB,'Event');
        const subscriber=onSnapshot(eventRef,{
            next:(snapshot)=>{
                const events=[];
                snapshot.docs.forEach((doc)=>{
                    events.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                setEvents(events);
                for(var i=0;i<events.length;i++){
                    if(events[i].eventPublished){
                        approvedEvent.push(events[i]);
                    }
                }
                setApprovedEvents(approvedEvent);
            }
        })
    },[])
    return (
        <View>
            {approvedEvents.map((event)=>{
                    return(
                        <EventCard 
                    startDate={event.eventDate}
                    startTime={event.eventTime}
                    endTime={event.eventEndTime}
                    title={event.eventName}
                    venue={event.eventVenue}
                    id={event.id}
                    type={event.eventType}
                    navigation={props.navigation}
                    ></EventCard>
                    )
            })}
            
        </View>
    )
}
export default ApprovedEvents;
