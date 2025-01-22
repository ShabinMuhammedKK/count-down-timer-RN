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
    if (
      updatedTime.minutes == 0 &&
      (updatedTime.seconds > 59 || updatedTime.seconds <= 0)
    ) {
      alert("Not valid time");
    } else {
      setTime({
        ...time,
        minutes: updatedTime.minutes,
        seconds: updatedTime.seconds,
      });
    }
  };

  if (time.minutes === 0 && time.seconds === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Set time</Text>
        <View style={styles.timeInput}>
          <View style={styles.inputLabel}>
            <TextInput
              style={styles.inputField}
              placeholder="0"
              onChangeText={(newMinutes) =>
                setNewTime({ ...updatedTime, minutes: newMinutes })
              }
            />
            <Text style={{ color: "white", fontSize: 12 }}>Minutes</Text>
          </View>
          <View style={styles.inputLabel}>
            <TextInput
              style={styles.inputField}
              placeholder="0"
              onChangeText={(newSeconds) =>
                setNewTime({ ...updatedTime, seconds: newSeconds })
              }
            />

            <Text style={{ color: "white", fontSize: 12 }}>Seconds</Text>
          </View>
          <TouchableOpacity onPress={onSetBtn}>
            <Button
              style={{ borderRadius: 6 }}
              color="#295ff2"
              height={40}
              title="Set"
              width={70}
              textColor="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default TimeInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c2e27",
    width: "96%",
    height: 150,
    borderRadius: 24,
    marginTop: 20,
    padding: 20,
  },
  inputField: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 80,
    textAlign: "center",
  },
  timeInput: {
    flexDirection: "row",
    gap: 6,
    alignItems: "flex-start",
    marginTop: 20,
  },
  headingText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  inputLabel: {
    alignItems: "center",
  },
});
