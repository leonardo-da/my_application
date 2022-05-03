import * as React from "react";
import { Box, Icon, Heading, Image, Stack, Text, FormControl, Input, VStack, Link, Button, HStack, Center, NativeBaseProvider, View } from "native-base";
import axios from 'axios';

import { StyleSheet } from 'react-native';

const Example = () => {
  const baseUrl = "http://192.168.1.72:80";
  const url = `${baseUrl}/multi/lightRoom2.php`

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
    }
    });

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
              <Image mt="5" source={ require('../assets/lampOn.png') } alt="lamp" size="64"/>
            </VStack>
          </Box>
          
        </Center>;
    };

export default Example