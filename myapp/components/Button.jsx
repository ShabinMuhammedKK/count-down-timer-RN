import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({
  height,
  width,
  color,
  title,
  textColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        { height: height, width: width, backgroundColor: color },
      ]}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
