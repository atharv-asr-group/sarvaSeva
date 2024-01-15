import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { VolunteerApplicationCard } from "./VolunteerApplicationCard";

const VolunteerApplication=(props)=>{
    const [applications,setApplications]=useState([]);
    var app=[];
    useEffect(()=>{
        const eventRef=collection(FIRESTORE_DB,'VolunteerRequest');
        const subscriber=onSnapshot(eventRef,{
            next:(snapshot)=>{
                const events=[];
                snapshot.docs.forEach((doc)=>{
                    events.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                setApplications(events);
                app=events;
            }
        })
    },[])
    console.log('application: ',applications);
    if(applications.length==0){
        return (
            <View>
                <Text>HI</Text>
            </View>
        )
    }

    return (
        <View>
            {applications.map((application)=>{
                    return(
                        <VolunteerApplicationCard 
                    eventId={application.eventId}
                    volunteerId={application.volunteerId}
                    eventVolunteers={application.eventVolunteers}
                    ></VolunteerApplicationCard>
                    )
            })}
            
        </View>
    )
}
export default VolunteerApplication;
