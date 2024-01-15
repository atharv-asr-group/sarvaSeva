import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminPage } from './Components/Admin/AdminPage';
import { EventCreation } from './Components/Admin/CreateEvent';
import ApprovedEvents from './Components/Admin/ApprovedEvents';
import PendingEvents from './Components/Admin/EventApplications';
import { HelperEventCreation } from './Components/Helper/CreateEventHelper';
import { DefineSkill } from './Components/Admin/DefineSkill';
import { HelperPage } from './Components/Helper/HelperPage';
import { HelperSignup } from './Components/Helper/HelperSignup';
import ApprovedEventsSeeker from './Components/Seeker/ApprovedEventsSeeker';
import { SeekerSignup } from './Components/Seeker/SeekerSignup';
import { SeekerPage } from './Components/Seeker/SeekerPage';
import { ViewDetails } from './Components/Admin/ViewDetails';
import { ViewDetailsVolunteer } from './Components/Admin/ViewDetailsVolunteer';
import { EventCardHelper } from './Components/Helper/EventCardHelper';
import ApprovedEventsHelper from './Components/Helper/ApprovedEventsHelper';
import VolunteerApplication from './Components/Admin/VolunteerApplication';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="AdminPage" component={AdminPage} options={{title:"Welcome Admin"}} />
            <Stack.Screen name="CreateEvent" component={EventCreation} options={{title:"Admin Create Event"}} />
            <Stack.Screen name="ApprovedEvents" component={ApprovedEvents} options={{title:"Approved Events"}} />
            <Stack.Screen name="PendingEvents" component={PendingEvents} options={{title:"Pending Events"}} />
            <Stack.Screen name="HelperEventCreation" component={HelperEventCreation} options={{title:"Welcome Helper"}} />
            <Stack.Screen name="DefineSkill" component={DefineSkill} options={{title:"Add skill"}} />
            <Stack.Screen name="HelperPage" component={HelperPage} options={{title:"Welcome Helper"}} />
            <Stack.Screen name="HelperSignup" component={HelperSignup} options={{title:"Helper Signup"}} />
            <Stack.Screen name="ApprovedEventsSeeker" component={ApprovedEventsSeeker} options={{title:"Welcome Seeker"}} />
            <Stack.Screen name="SeekerSignup" component={SeekerSignup} options={{title:"Seeker Signup"}} />
            {/* <Stack.Screen name="SeekerSignup" component={SeekerSignup} options={{title:"Seeker Signup"}} /> */}
            <Stack.Screen name="SeekerPage" component={SeekerPage} options={{title:"Welcome Seeker"}} />
            <Stack.Screen name="ViewDetails" component={ViewDetails} options={{title:"Event Details"}} />
            <Stack.Screen name="ViewDetailsVolunteer" component={ViewDetailsVolunteer} options={{title:"Event Details"}} />
            <Stack.Screen name="EventCardHelper" component={EventCardHelper} options={{title:"Events card"}} />
            <Stack.Screen name="ApprovedEventsHelper" component={ApprovedEventsHelper} options={{title:"Events to Apply"}} />
            <Stack.Screen name="VolunteerApplication" component={VolunteerApplication} options={{title:""}} />

            {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome"}} /> */}
            {/* <Stack.Screen name="VolunteerApplication" component={VolunteerApplication} options={{title:"Volunteer"}} /> */}
            
        </Stack.Navigator>
        </NavigationContainer>
  );
}
const HomeScreen=(props)=>{
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('AdminPage')} style={styles.button}>
      <Text style={styles.buttons}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('HelperSignup')} style={styles.button}>
      <Text style={styles.buttons}>Helper</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('SeekerSignup')} style={styles.button}>
      <Text style={styles.buttons}>Seeker</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    fontSize:20,
    color:'white',
    backgroundColor:'#1245ff',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:20,
    margin:20,
  
  }
});
