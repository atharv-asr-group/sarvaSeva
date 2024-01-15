import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet,TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { NavigationProp } from '@react-navigation/native';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import DropdownComponent from '../Dropdown';




const skilldata=[];
export const HelperSignup=(props)=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [aadharno,setAadharno]=useState('');
    const [skills,setSkills]=useState('');
    const [skillsArray,setSkillsArray]=useState([]);
    const addHelper=async()=>{
        try{
            const docRef= await addDoc(collection(FIRESTORE_DB,'Volunteer'),{
                name:name,
                phone:phone,
                address:address,
                aadharno:aadharno,
                skills:skills
            });
            console.log("person added with document id : ", docRef.id);
            var i=docRef.id;
            console.log("this is fron helpersignuppage",i);
            props.navigation.navigate("HelperPage",{id:i});
        }
        catch(e){
            console.error('error adding document: '+e);
        }
    }
    
    useEffect(()=>{
        const skillRef=collection(FIRESTORE_DB,'Skill');
        const subscriber=onSnapshot(skillRef,{
            next:(snapshot)=>{
                const skills=[];
                snapshot.docs.forEach((doc)=>{
                    skills.push({
                        id:doc.id,
                        ...doc.data()
                    }) 
                })
            setSkillsArray(skills);

            }
        })
        console.log("skillsArray:");
        console.log(skillsArray);
        
    },[]);
    // console.log("skilldata:");
    // console.log(skilldata);
    if (skilldata.length<1){
        Object.values(skillsArray).forEach((value) => {
        skilldata.push({
            label: value.skill,
            value :value.skill
        })
        // console.log(value);

      });}
    return (
        <View style={styles.container}>
            <TextInput value={name} style={styles.input} placeholder="Name" autoCapitalize="none" onChangeText={(text)=>setName(text)}></TextInput>
            <TextInput value={phone} style={styles.input} placeholder="Phone" autoCapitalize="none" onChangeText={(text)=>setPhone(text)}></TextInput>
            <TextInput value={address} style={styles.input} placeholder="Address" autoCapitalize="none" onChangeText={(text)=>setAddress(text)}></TextInput>
            <TextInput value={aadharno} style={styles.input} placeholder="Aadhar number" autoCapitalize="none" onChangeText={(text)=>setAadharno(text)}></TextInput>
            {/* <TextInput value={skills} style={styles.input} placeholder="Skills" autoCapitalize="none" onChangeText={(text)=>setSkills(text)}></TextInput> */}
            
            <DropdownComponent data={skilldata} setSkills={setSkills} />
            <TouchableOpacity
      onPress={()=>addHelper()}
      >
        <Text
        style={styles.button_save}
        >Save</Text>
      </TouchableOpacity>
    </View>
    )
}
// export default Page1;
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