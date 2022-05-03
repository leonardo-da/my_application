import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import logins from "./screen/login";
import signup from "./screen/signup";
import room1 from "./screen/room1"
import room2 from "./screen/room2"
import Settings from "./screen/settings"
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () =>{

    function TabScreenConfiguration (){
        return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle:{
                position:'absolute',
                borderRadius:20,
                bottom:-20,
                left:20,
                right:20,
                height:90,
                paddingBottom:30,
                paddingTop:10
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'room1') {
                  iconName = focused ? 'ios-sunny' : 'ios-sunny-outline';
                } else if(route.name === 'room2') {
                    iconName = focused ? 'ios-sunny' : 'ios-sunny-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#ff5a66',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="room1" component={room1} />
          <Tab.Screen name="room2" component={room2} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <NativeBaseProvider>
                <Stack.Navigator>
                    <Stack.Screen name = 'login' component = { logins } />
                    <Stack.Screen name = 'Smart House'>{()=>(
                            <TabScreenConfiguration/>)}
                    </Stack.Screen>
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    )
}

export default Navigation