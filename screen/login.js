import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, FormControl, Input, VStack, Link, Button, HStack, Center, View } from "native-base";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import axios from 'axios';

const Example = () => {
  const baseUrl = "http://192.168.1.72:80";
  const url = `${baseUrl}/multi/login.php`;

  const navigation = useNavigation()


  const styles = StyleSheet.create({
    inputstl: {
      borderRadius: 20,
      borderColor: "#20232a",
      width: '100%',
      paddingLeft:20,
      margin:5,
      fontSize:14
    },
    Button: {
      backgroundColor: '#ff5a66',
      borderRadius: 20,
      width:'70%',
      height:45
    }
    });

    const Login = async() =>{
  
        axios.post(url, {
          Email:'Dan@gmail.com',
          Password:'12345678'
        }
        )
          .then(function (response) {
              console.log(response);
              if( response.data[0] == "U"){
                alert("Email or Password incorrect")
              }else{
                alert("Successful entry")
                navigation.navigate('Smart House')
              }
          })
          .catch(function (error) {
              console.log(error);
          });
      }

  return (
  <View>
      <Center w="100%">
      <Box safeArea p="2" py="8" w="80%">
        <Heading size="xl" color="#ff5a66" mt="12">Sign in</Heading>

        <VStack space={3} mt="20" alignItems='center' justifyContent="center">
          <Input placeholder="Email" keyboardType="email-address" style={styles.inputstl}/>
          <Input type="password" placeholder="Password" style={styles.inputstl}/>
            
          <Button mt="2" style={styles.Button} onPress={Login}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              If you are a new user please contact the Administrator.
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
  </View>
  )
};

export default Example