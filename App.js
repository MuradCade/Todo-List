import { useState } from 'react';
import {View,Text,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Image, Keyboard, TouchableOpacity } from 'react-native';
import Tasks from './components/Tasks';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItem] = useState([]);
  const handle = () => {
    setTaskItem([...taskItems,task]);
    setTask(null);
  }
 

  const compeleteTask = (index) =>{
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index,1);
  setTaskItem(itemsCopy);
  }
  return (
<View style={styles.head}>
{/* <Task/> */}
<View style={styles.wrapper}>
<Text style={styles.title}>Today's Tasks</Text>
<Image source={require('./assets/avatar.jpg')} style={styles.avatar}/>
</View>
{
  taskItems.map((item,index) => {
    // if(item == ""){
    //     alert("please type new task");
    // }
    return (
      <TouchableOpacity key={index}  onPress={()=>compeleteTask(index)}>
    <Tasks  text={item}/>
    </TouchableOpacity>
    )

  })
}
  


<View style={styles.main}>
  <TextInput placeholder='Enter New Task' style={styles.input} value={task} onChangeText={text => setTask(text)}></TextInput>
  <Text style={styles.inputbtn} onPress={()=> handle()}>+</Text>
</View>
</View>
    );
}
const styles = StyleSheet.create({
  head:{
   
    flex:1,
    backgroundColor: "#E8EAED"
  },
  wrapper:{
    paddingTop:80,
    paddingHorizontal:20,
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"space-between",
 

  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  task:{
    backgroundColor:"#fff",
    padding:10,
    margin:10

  },
  box:{
    width:20,
    height:20
  },
  // task box input
  main:{
    backgroundColor:'#fff',
    padding:10,
    position:'absolute',
    // top:0,
    bottom:12,
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:20
  },
  input:{
    width:"90%",
    // padding:10
    // borderRadius:10
    // marginLeft:90,
    // padding:10
  },
  inputbtn:{
    // flex:1,
    // padding:12,
    // width:40,
    // height:15,
    // backgroundColor:"#23456789",
    // marginLeft:20
    // fontSize:18,
    // borderRadius:90
    // marginTop:12
    position:"relative",
    top:2,
    fontSize:18,

  },

  avatar:{
    width:55,
    height:55,
    borderRadius:80,
    marginTop:-10,
    borderWidth:2,
    borderColor:"blue"
  }


})

