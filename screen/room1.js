import * as React from "react";
import { Box, Icon, Heading, Stack, Text, FormControl, Input, VStack, Link, Button, HStack, Center, NativeBaseProvider, View } from "native-base";


const Example = () => {
  return <Center w="100%">
  <Box safeArea p="2" w="90%" maxW="290" py="8">
    <Heading size="lg" color="coolGray.800" _dark={{
    color: "warmGray.50"
  }} fontWeight="semibold">
      Room2
      Adding this text to test Github
    </Heading>
    <Button
      onPress={() => console.log("Change the image on the backgorund")}
    >
      Click Me
    </Button>
  </Box>
  <Image size={150} resizeMode={"contain"} borderRadius={100} source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" />
</Center>;
};

export default Example