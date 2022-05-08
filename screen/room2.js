import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text, VStack, Button, Center } from "native-base";
import axios from 'axios';
import { StyleSheet } from 'react-native';

const Example = () => {
  const baseUrl = "http://192.168.1.72:80";
  const url = `${baseUrl}/multi/lightRoom2.php`;
  const url1 = `${baseUrl}/multi/room2.php`;

  const [imgd, setImgd] = useState('');

  const imget = () =>{
    axios.get(url1).then(resp => {
      console.log(resp.data);
      if(resp.data == 1){
        setImgd(1);
        
      }else{
        setImgd(0);
      }
    });
  }
  useEffect(() => {
    setInterval(imget,5000);
  }, []);

    const On = async() =>{
      axios.post(url, {
          Value:1
      })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const Off = async() =>{
      axios.post(url, {
        Value:0
      })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }

      const styles = StyleSheet.create({
        Button: {
          backgroundColor: '#ff5a66',
          borderRadius: 20,
          width:'90%',
          height:'12%'
        },
        Textstl:{
          color: '#fff',
          fontSize:16
        },
        imgf:{
          backgroundColor: imgd ? '#fad204' : '#9e9e9e'
        }
        });

    return <Center w="100%">
          <Box p="2" py="4" w="80%">
            <Heading size="xl" color="#ff5a66"> Room 2 </Heading>
    
            <VStack mt="10" alignItems='center' >
              <Button style={styles.Button} onPress={On}>
                <Text style={styles.Textstl}> Light On </Text>
                </Button>
              <Button mt="3" style={styles.Button} onPress={Off}>
                <Text style={styles.Textstl}> Light Off </Text>
                </Button>
              <Image mt="5" style={styles.imgf} source={ require('../assets/lamp.png') } alt="lamp" size="64"/>
            </VStack>
          </Box>
          
        </Center>;
    }

export default Example