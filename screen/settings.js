import React, { useState, useEffect } from 'react';
import { Picker, Select, Box, Icon, Heading, Stack, Text, FormControl, Input, VStack, Link, Button, HStack, Center, FlatList} from "native-base";
import { StyleSheet } from 'react-native';
import axios from 'axios';


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
      color:"#ff5a66",
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

  function res() {
    axios.get(url2).then((response) => {
    console.log(response.data);
    setConfig(response.data);
  })};

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
          })
          .catch(function (error) {
              console.log(error);
          });
      }
        res();
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
          })
          .catch(function (error) {
              console.log(error);
          });
      }
        res();
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
      <Select id="hron" placeholder="Hour" width="25%" borderRadius="20" pl="4" borderColor="#20232a" value={HourOn} onValueChange={HourOn => setHourOn(HourOn)}>
          <Select.Item label="01" value="01" />
          <Select.Item label="02" value="02" />
          <Select.Item label="03" value="03" />
          <Select.Item label="04" value="04" />
          <Select.Item label="05" value="05" />
          <Select.Item label="06" value="06" />
          <Select.Item label="07" value="07" />
          <Select.Item label="08" value="08" />
          <Select.Item label="09" value="09" />
          <Select.Item label="10" value="10" />
          <Select.Item label="11" value="11" />
          <Select.Item label="12" value="12" />
          <Select.Item label="13" value="13" />
          <Select.Item label="14" value="14" />
          <Select.Item label="15" value="15" />
          <Select.Item label="16" value="16" />
          <Select.Item label="17" value="17" />
          <Select.Item label="18" value="18" />
          <Select.Item label="19" value="19" />
          <Select.Item label="20" value="20" />
          <Select.Item label="21" value="21" />
          <Select.Item label="22" value="22" />
          <Select.Item label="23" value="23" />
        </Select>
        <Select placeholder="Minute" width="25%" borderRadius="20" pl="4" borderColor="#20232a" ml="3" value={MinuteOn} onValueChange={MinuteOn => setMinuteOn(MinuteOn)}>
          <Select.Item label="00" value="00" />
          <Select.Item label="05" value="05" />
          <Select.Item label="10" value="10" />
          <Select.Item label="15" value="15" />
          <Select.Item label="20" value="20" />
          <Select.Item label="25" value="25" />
          <Select.Item label="30" value="30" />
          <Select.Item label="35" value="35" />
          <Select.Item label="40" value="40" />
          <Select.Item label="45" value="45" />
          <Select.Item label="50" value="50" />
          <Select.Item label="55" value="55" />
        </Select>
        <Select placeholder="Room" width="25%" borderRadius="20" pl="4" borderColor="#20232a" ml="3" value={roomOn} onValueChange={roomOn => setRoomOn(roomOn)}>
          <Select.Item label="1" value="1" />
          <Select.Item label="2" value="2" />
        </Select>
        <Button style={styles.Button} onPress={lightOn}>Go</Button>
      </HStack>

      <Text style={styles.Textstl} mt="5">Light Off</Text>
      <HStack justifyContent="center">
      <Select placeholder="Hour" width="25%" borderRadius="20" pl="4" borderColor="#20232a" value={HourOff} onValueChange={HourOff => setHourOff(HourOff)}>
          <Select.Item label="01" value="01" />
          <Select.Item label="02" value="02" />
          <Select.Item label="03" value="03" />
          <Select.Item label="04" value="04" />
          <Select.Item label="05" value="05" />
          <Select.Item label="06" value="06" />
          <Select.Item label="07" value="07" />
          <Select.Item label="08" value="08" />
          <Select.Item label="09" value="09" />
          <Select.Item label="10" value="10" />
          <Select.Item label="11" value="11" />
          <Select.Item label="12" value="12" />
          <Select.Item label="13" value="13" />
          <Select.Item label="14" value="14" />
          <Select.Item label="15" value="15" />
          <Select.Item label="16" value="16" />
          <Select.Item label="17" value="17" />
          <Select.Item label="18" value="18" />
          <Select.Item label="19" value="19" />
          <Select.Item label="20" value="20" />
          <Select.Item label="21" value="21" />
          <Select.Item label="22" value="22" />
          <Select.Item label="23" value="23" />
        </Select>
        <Select placeholder="Minute" width="25%" borderRadius="20" pl="4" borderColor="#20232a" ml="3" value={MinuteOff} onValueChange={MinuteOff => setMinuteOff(MinuteOff)}>
          <Select.Item label="00" value="00" />
          <Select.Item label="05" value="05" />
          <Select.Item label="10" value="10" />
          <Select.Item label="15" value="15" />
          <Select.Item label="20" value="20" />
          <Select.Item label="25" value="25" />
          <Select.Item label="30" value="30" />
          <Select.Item label="35" value="35" />
          <Select.Item label="40" value="40" />
          <Select.Item label="45" value="45" />
          <Select.Item label="50" value="50" />
          <Select.Item label="55" value="55" />
        </Select>
        <Select placeholder="Room" width="25%" borderRadius="20" pl="4" borderColor="#20232a" ml="3" value={roomOff} onValueChange={roomOff => setRoomOff(roomOff)}>
          <Select.Item label="1" value="1" />
          <Select.Item label="2" value="2" />
        </Select>
        <Button style={styles.Button} onPress={lightOff}>Go</Button>
      </HStack>

      <Heading size="lg" mt="8" color="#ff5a66" fontWeight="semibold">
          Current Time
      </Heading>
    <Text fontSize="16">{Config}</Text>
    </VStack>
  </Box>
</Center>;
};

export default Example