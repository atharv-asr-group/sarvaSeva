import { deleteDoc,doc, getDoc } from 'firebase/firestore';
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';


const Divider = () => {
    return <View style={styles.divider} />;
  };

export const EventCard=(props)=>{
  const eventId=props.id;
   const ref =doc(FIRESTORE_DB, 'Event',eventId)
    const deleteItem=async()=>{
      deleteDoc(ref);
    }
    return(
        
        <View style={styles.container}>
            <View style={styles.leftside}>
                <Text>Start Date</Text>
                <Text>{props.startDate}</Text>
                <Divider />
                <Text>Time</Text>
                <Text>{props.endDate}</Text>

            </View>
            <View>
                <Text> {props.title}</Text>
                <TouchableOpacity onPress={()=>{
                  props.navigation.navigate('ViewDetails',{date:props.startDate,time:props.startTime,endTime:props.endTime,venue:props.venue,type:props.type})
                }}>
                <Text
                style={styles.button}
                >View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteItem}>
                <Text
                style={styles.button}

                >Remove Event</Text>
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