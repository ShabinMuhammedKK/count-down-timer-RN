import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { TimeContext } from "@/context";

const ToggleBtn = () => {
  const { Colors, theme, setTheme } = useContext(TimeContext);
  const currentTheme = theme === "Dark" ? Colors.dark : Colors.light;

  const onThemeSet = () => {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  return (
    <View style={styles.toggleButton}>
      <View style={styles.btn}>
        <TouchableOpacity onPress={onThemeSet}>
          <Button
            color={currentTheme.background}
            height={30}
            width={40}
            textColor={currentTheme.text}
            title={theme === "Dark" ? "Light" : "Dark"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleBtn;

const styles = StyleSheet.create({
  toggleButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn:{
    backgroundColor:"#424242",
    paddingHorizontal:1.5,
    padding:2,
    borderRadius:12
  }
});
