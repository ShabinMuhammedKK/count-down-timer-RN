import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TimeInput from "@/components/TimeInput";
import TimeController from "@/components/TimeController";
import ToggleBtn from "@/components/ToggleBtn";
import { TimeContext } from "@/context";

const Home = () => {
  const { Colors, theme } = useContext(TimeContext);

  const currentTheme = theme === "Dark" ? Colors.dark : Colors.light;
  return (
    <SafeAreaView>
      <View
        style={[styles.container, { backgroundColor: currentTheme.background }]}
      >
        <Text style={[styles.heading, { color: currentTheme.text }]}>
          Timer
        </Text>
        <ToggleBtn />
        <TimeInput />
        <TimeController />
      </View>
      <StatusBar
        barStyle={theme === "Dark" ? "light-content" : "dark-content"}
        backgroundColor={currentTheme.background}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 30,
  },
});
