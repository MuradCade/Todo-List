import react from 'react';
import {View,Text,StyleSheet} from  'react-native';

const Task = (props) =>{
 return(
    <View style={styles.card}>
    <Text style={styles.box}></Text>
    <Text style={styles.text}>{props.text}</Text>
    <Text style={styles.dot}></Text>
    </View>
 )
}

export default Task;

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        padding:15,
        marginTop:10,
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        justifyContent:"space-between"
    },
    box:{
        width:24,
        height:24,
        backgroundColor:"#55BCF6",
        opacity:0.4,
        marginRight:20,
        // flex:1,
        
    },
    text:{
        fontWeight:'bold',
        // marginTop:10
        marginBottom:0,
        // flexWrap:'wrap',
        flex:1,
    },
    dot:{
        flexWrap:'wrap',
        width:20,
        height:20,
        borderWidth:2,
        borderColor:"pink",
        borderRadius:60,
        // position:"absolute",
        // top:0,
        // right:0,
        // marginTop:10,
        // marginRight:20
    }

})