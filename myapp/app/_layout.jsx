import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

import { TimeContext } from "../context.js";
import { Colors } from "../constants/Colors.ts";

const RootLayout = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [theme, setTheme] = useState("Light"); // Dark | Light

  return (
    <>
      <TimeContext.Provider value={{ time, setTime, Colors, theme, setTheme }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </TimeContext.Provider>
    </>
  );
};
export default RootLayout;

const styles = StyleSheet.create({});
