import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

import { TimeContext } from "../context.js";




const RootLayout = () => {

  const [time,setTime] = useState({minutes:0,seconds:0});
  return (
    <>
    <TimeContext.Provider value={{time,setTime}}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
      </Stack>
      </TimeContext.Provider>
    </>
  );
};
export default RootLayout;

const styles = StyleSheet.create({});







