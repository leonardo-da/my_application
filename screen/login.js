import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, FormControl, Input, VStack, Link, Button, HStack, Center, View } from "native-base";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Example = () => {
  const baseUrl = "http://192.168.1.72:80";
  const url = `${baseUrl}/multi/login.php`;

  const navigation = useNavigation();


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

    const [Email, setEmail] = React.useState('');
    const [Password, setPassword] = React.useState('');

    const setData = async () => {
      try {
        const jsonValue = JSON.stringify('prueba')
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        console.log(e);
      }
    }

    const Login = async() =>{
      if(Email == '' || Password == ''){
        alert("There is empty data");
      }else{
        axios.post(url,{
          Email:Email,
          Password:Password
        })
          .then(function (response) {
              console.log(response);
              if(response.data == "User or password incorrect"){
                alert(response.data);
              }else{
                alert(response.data);
                setData()
                navigation.navigate("Smart House");
              }
          })
          .catch(function (error) {
              console.log(error);
          })
      }
      };

      useEffect(() =>{
        const storage = async()=>{
          let items = await AsyncStorage.getItem('@storage_Key');
          console.log(items)
          if(items == '"prueba"'){
            navigation.navigate("Smart House");
          }
        }
        storage()
        },[]);

  return (
  <View>
      <Center w="100%">
      <Box safeArea p="2" py="8" w="80%">
        <Heading size="xl" color="#ff5a66" mt="12">Sign in</Heading>

        <VStack space={3} mt="20" alignItems='center' justifyContent="center">

          <Input placeholder="Email" keyboardType="email-address" style={styles.inputstl} value={Email} onChangeText={Email => setEmail(Email)}/>

          <Input type="password" placeholder="Password" style={styles.inputstl} value={Password} onChangeText={Password => setPassword(Password)}/>
            
          <Button mt="2" style={styles.Button} onPress={Login}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" >
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