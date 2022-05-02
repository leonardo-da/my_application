import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, FormControl, Input, VStack, Link, Button, HStack, Center, View } from "native-base";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import axios from 'axios';

const Example = () => {

  const [email, setEmail] = useState('') //to obtain a value of input Email
  const [pass, setPass] = useState('') //to obtain a value of input Password

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

  return (
  <View>
      <Center w="100%">
      <Box safeArea p="2" py="8" w="80%">
        <Heading size="xl" color="#ff5a66" mt="12">Sign in</Heading>

        <VStack space={3} mt="20" alignItems='center' justifyContent="center">
          <Input placeholder="Email" keyboardType="email-address" style={styles.inputstl}/>
          <Input type="password" placeholder="Password" style={styles.inputstl}/>
            
          <Button mt="2" style={styles.Button} >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "#ff5a66",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={()=>{navigation.navigate('Smart House')}}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  </View>
  )
};

export default Example