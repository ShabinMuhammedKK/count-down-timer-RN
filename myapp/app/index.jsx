import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TimeInput from "@/components/TimeInput";
import TimeController from "@/components/TimeController";
import ToggleBtn from "@/components/ToggleBtn";

const Home = () => {

  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Timer</Text>
        <ToggleBtn />
        <TimeInput />
        <TimeController />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "900",
  },
});
