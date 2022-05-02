import React, { useState, useEffect, Component} from 'react';
import { Box, Heading, Text, Input, VStack, Link, Button, HStack, Center } from "native-base";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import axios from 'axios';



const Example = () => {
  const navigation = useNavigation();
  const baseUrl = "http://192.168.1.72:80";
    

  const Login = async() =>{
    const formData = new FormData()
    formData.append('Email','daniel@gmail.com')
    formData.append('Password','12345678')
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/multi/signUp.php`,
        data: formData,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      }).then(function (response) {
          //handle success
          console.log(response);
        }).catch(function (response) {
          //handle error
          console.log(response);
        });
  }

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

    return <Center w="100%">
        <Box safeArea p="2" w="80%" py="8">
          <Heading size="xl" color="#ff5a66" >Sign up</Heading>

          <VStack space={3} mt="20" alignItems='center' justifyContent="center">
            <Input placeholder="Email" keyboardType="email-address" style={styles.inputstl}/>
            <Input type="password" placeholder="Password" style={styles.inputstl}/>
            <Input type="password" placeholder="Password" style={styles.inputstl}/>
            
            <Button mt="5" style={styles.Button} onPress={Login}>Sign up</Button>

            <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I already have an account.{" "}
            </Text>
            <Link _text={{
            color: "#ff5a66",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={()=>{navigation.navigate('login')}}>
              Login
            </Link>
          </HStack>
          </VStack>
          
        </Box>
      </Center>;
  }

export default Example;