import React, { useState } from "react";
import { View,Text, TextInput, Button,StyleSheet } from "react-native";
import Service from "./components/Service";


const Home=()=>{
    const [userid,setuserid]=useState(0)
    const [state,a]=Service();
    const data=state.post
    const onclick=(id)=>{
        a(id);
    }

    return (
        <View style={{paddingTop:40,alignItems:"center"}}>
         <TextInput  placeholder="enter name" style={{width:200,borderWidth:1,textAlign:"center",marginBottom:10}} onChangeText={(val)=>setuserid(val)}/>
         <Button title="search" onPress={()=>onclick(userid)}/>
         <View style={{borderWidth:1,marginTop:20,padding:10,width:300,height:300}}>
         <Text style={styles.text}>{data.id}</Text>
         <Text style={styles.text}>{data.body}</Text>
         </View>
        
     </View>
    )
}
const styles=StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:20,
        marginTop:10
    }
})
export default Home;


