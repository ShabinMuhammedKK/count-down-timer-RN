import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "./Button";
import { useContext, useState } from "react";
import { TimeContext } from "@/context";

const TimeInput = () => {
  const [updatedTime, setNewTime] = useState({ minutes: 0, seconds: 0 });
  const { time, setTime } = useContext(TimeContext);

  const onSetBtn = () => {
    if (updatedTime.seconds > 59 || updatedTime.seconds < 0) {
      alert("Seconds not valid");
    } else {
      setTime({
        ...time,
        minutes: updatedTime.minutes,
        seconds: updatedTime.seconds,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Set timer</Text>
      <View style={styles.timeInput}>
        <TextInput
          style={styles.inputField}
          placeholder="Minutes"
          onChangeText={(newMinutes) =>
            setNewTime({ ...updatedTime, minutes: newMinutes })
          }
        />
        <TextInput
          style={styles.inputField}
          placeholder="Seconds"
          onChangeText={(newSeconds) =>
            setNewTime({ ...updatedTime, seconds: newSeconds })
          }
        />
        <TouchableOpacity onPress={onSetBtn}>
          <Button
            color="#000"
            height={36}
            title="Set"
            width={70}
            textColor="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
    width: "96%",
    height: 150,
    borderRadius: 16,
    marginTop: 20,
    padding: 20,
  },
  inputField: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 80,
  },
  timeInput: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginTop: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
