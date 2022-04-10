import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigations from "./Navigations";

function App(){
  return(
    <SafeAreaView style = {{flex:1}}>
      <Navigations/>
    </SafeAreaView>
  )
}

export default App