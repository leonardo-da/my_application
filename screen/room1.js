import * as React from "react";
import { Box, Icon, Image, Heading, Stack, Text, FormControl, Input, VStack, Link, Button, HStack, Center, NativeBaseProvider, View } from "native-base";
import { StyleSheet } from 'react-native';

const Example = () => {
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

    return <Center w="100%">
          <Box p="2" py="4" w="80%">
            <Heading size="xl" color="#ff5a66"> Room 1 </Heading>
    
            <VStack mt="10" alignItems='center' >
              <Button style={styles.Button}>
                <Text style={styles.Textstl}> Light On </Text>
              </Button>
              <Button mt="3" style={styles.Button}>
                <Text style={styles.Textstl}> Light Off </Text>
              </Button>
              <Image mt="5" source={ require('../assets/lampOn.png') } alt="lamp" size="64"/>
            </VStack>
          </Box>
          
        </Center>;
    };

export default Example