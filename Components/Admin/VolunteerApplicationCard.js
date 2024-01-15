import { deleteDoc,doc, getDoc,updateDoc } from 'firebase/firestore';
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';


const Divider = () => {
    return <View style={styles.divider} />;
  };

export const VolunteerApplicationCard=(props)=>{
    
  //  const eventId=props.id;
   const ref =doc(FIRESTORE_DB, 'Event',props.eventId)
    console.log('props application:',props.eventVolunteers);
    const apply=async()=>{
        if(props.eventVolunteers.indexOf(props.volunteerId)==-1){
            props.eventVolunteers.push(props.volunteerId);
            const ids=props.eventVolunteers;
            console.log('id of volunteer is :', ids);
            updateDoc(ref,{eventVolunteers:ids});
        }
        

    }
    return(
        
        <View style={styles.container}>
            
            <View>
                <Text> event-{props.eventId}</Text>
                <Text> Volunteer-{props.volunteerId}</Text>
                <TouchableOpacity onPress={apply}>
                <Text
                style={styles.button}
                >Approve</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#ffffff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius:10,
        margin: 10,
        paddingTop: 10,
        paddingBottom: 10,
        // paddingLeft: 30,
        // paddingRight: 15,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          }),

    },
    leftside:{
        display:'flex',
        flexDirection:'column',
        // alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#F4F4F4',
        borderRadius:10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },

    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
      },
      button:{
        // flex:1,
        textAlign:'center',
        display:'flex',
        backgroundColor:'#EC780D',
        color:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        borderRadius:10,

      }

});