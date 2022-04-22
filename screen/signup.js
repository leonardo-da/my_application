import React, { useState, useEffect, Component} from 'react';
import { Box, TouchableOpacity, Icon, Heading, Stack, Text, FormControl, Input, VStack, Link, Button, HStack, Center, NativeBaseProvider, View } from "native-base";
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';



const Example = () => {
  const navigation = useNavigation()
    
    return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Email" keyboardType="email-address" onChange={Email=>this.setState({Email})}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Password" onChange={Password=>this.setState({Password})}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" placeholder="Password"/>
            </FormControl>
            <Button mt="2" colorScheme="indigo" >
              Sign up
            </Button>

            <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I already have an account.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={()=>{navigation.navigate('login')}}>
              Login
            </Link>
          </HStack>
          </VStack>
        </Box>
      </Center>;
  };

export default Example