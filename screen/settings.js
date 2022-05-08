import React, { useState, useEffect } from 'react';
import { Select, Box, Heading, Text, VStack, Link, Button, HStack, Center} from "native-base";
import { StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Restart} from 'fiction-expo-restart';
import {Picker} from '@react-native-picker/picker';


const Example = () => {
  const baseUrl = "http://192.168.1.72:80";
  const url = `${baseUrl}/multi/setTimeOn.php`;
  const url1 = `${baseUrl}/multi/setTimeOff.php`;
  const url2 = `${baseUrl}/multi/config.php`;
  
  const styles = StyleSheet.create({
    Button: {
      backgroundColor: '#ff5a66',
      borderRadius: 20,
      height:45,
      marginLeft:8
    },
    Textstl:{
      color: '#ff5a66',
      fontSize:16
    }
    });

  const [HourOn, setHourOn] = React.useState('');
  const [MinuteOn, setMinuteOn] = React.useState('');
  const [roomOn, setRoomOn] = React.useState('');
  const [HourOff, setHourOff] = React.useState('');
  const [MinuteOff, setMinuteOff] = React.useState('');
  const [roomOff, setRoomOff] = React.useState('');

  const [Config, setConfig] = React.useState('');

  useEffect(()=>{
    res();
  },[]);

  const res = () =>{
    axios.get(url2).then((response) => {
    console.log(response.data);
    setConfig(response.data);
  })};

  const verif = () =>{
    AsyncStorage.clear();
    Restart();
  };

    const lightOn = async() =>{
      if(HourOn == '' || MinuteOn == '' || roomOn == ''){
        alert("There is empty data")
      }else{
        axios.post(url,{
          Hour:HourOn,
          Minute:MinuteOn,
          Room:roomOn
        })
          .then(function (response) {
              console.log(response);
              alert(response.data);
              res();
          })
          .catch(function (error) {
              console.log(error);
          });
      }
        setHourOn('');
        setMinuteOn('');
        setRoomOn('');
    };

    const lightOff = async() =>{
      if(HourOff == '' || MinuteOff == '' || roomOff == ''){
        alert("There is empty data")
      }else{
        axios.post(url1,{
          Hour:HourOff,
          Minute:MinuteOff,
          Room:roomOff
        })
          .then(function (response) {
              console.log(response);
              alert(response.data);
              res();
          })
          .catch(function (error) {
              console.log(error);
          });
      }
        setHourOff('');
        setMinuteOff('');
        setRoomOff('');
    };

  return <Center w="100%" h="80%">
  <Box safeArea p="2" w="80%" py="8">
    <VStack space={3}>
      <Heading size="lg" color="#ff5a66">
          Set time
      </Heading>

      <Text style={styles.Textstl} mt="30">Light On</Text>
      <HStack justifyContent="center">
      <Picker selectedValue={HourOn} style={{ height: 50, width:'25%' }}  borderRadius="20" pl="4" borderColor="#20232a" value={HourOn} onValueChange={HourOn => setHourOn(HourOn)}>
          <Picker.Item label="Hr" value="" />
          <Picker.Item label="00" value="00" />
          <Picker.Item label="01" value="01" />
          <Picker.Item label="02" value="02" />
          <Picker.Item label="03" value="03" />
          <Picker.Item label="04" value="04" />
          <Picker.Item label="05" value="05" />
          <Picker.Item label="06" value="06" />
          <Picker.Item label="07" value="07" />
          <Picker.Item label="08" value="08" />
          <Picker.Item label="09" value="09" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
        </Picker>

        <Picker selectedValue={MinuteOn} style={{ height: 50, width:'25%',borderRadius:20, borderColor:'#20232a' }} pl="4" value={MinuteOn} onValueChange={MinuteOn => setMinuteOn(MinuteOn)}>
          <Picker.Item label="Mn" value="" />
          <Picker.Item label="00" value="00" />
          <Picker.Item label="05" value="05" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="55" value="55" />
        </Picker>

        <Picker selectedValue={roomOn} style={{ height: 50, width:'25%',borderRadius:20, borderColor:'#20232a' }} pl="4" value={roomOn} onValueChange={roomOn => setRoomOn(roomOn)}>
          <Picker.Item label="Rm" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
        </Picker>
        <Button style={styles.Button} onPress={lightOn}>Go</Button>
      </HStack>

      <Text style={styles.Textstl} mt="5">Light Off</Text>
      <HStack justifyContent="center">
      <Picker selectedValue={HourOff} style={{ height: 50, width:'25%' }}  borderRadius="20" pl="4" borderColor="#20232a" value={HourOff} onValueChange={HourOff => setHourOff(HourOff)}>
          <Picker.Item label="Hr" value="" />
          <Picker.Item label="00" value="00" />
          <Picker.Item label="01" value="01" />
          <Picker.Item label="02" value="02" />
          <Picker.Item label="03" value="03" />
          <Picker.Item label="04" value="04" />
          <Picker.Item label="05" value="05" />
          <Picker.Item label="06" value="06" />
          <Picker.Item label="07" value="07" />
          <Picker.Item label="08" value="08" />
          <Picker.Item label="09" value="09" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
        </Picker>

        <Picker selectedValue={MinuteOff} style={{ height: 50, width:'25%',borderRadius:20, borderColor:'#20232a' }} pl="4" value={MinuteOff} onValueChange={MinuteOff => setMinuteOff(MinuteOff)}>
          <Picker.Item label="Mn" value="" />
          <Picker.Item label="00" value="00" />
          <Picker.Item label="05" value="05" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="55" value="55" />
        </Picker>

        <Picker selectedValue={roomOff} style={{ height: 50, width:'25%',borderRadius:20, borderColor:'#20232a' }} pl="4" value={roomOff} onValueChange={roomOff => setRoomOff(roomOff)}>
          <Picker.Item label="Rm" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
        </Picker>
        <Button style={styles.Button} onPress={lightOff}>Go</Button>
      </HStack>
      <Heading size="lg" mt="8" color="#ff5a66" fontWeight="semibold">
          Current Time
      </Heading>
    <Text fontSize="16">{Config}</Text>

    
    <Link style={{alignSelf: 'flex-end'}} _text={{
      color: "#ff5a66",
      fontWeight: "medium",
      fontSize: "sm"
    }} onPress={ verif }>
        LOG OUT
    </Link>
    </VStack>
  </Box>
</Center>;
};

export default Example