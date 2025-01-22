import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TimeContext } from "@/context";

const TimeController = () => {
  const { time, setTime } = useContext(TimeContext);
  const [status, setStatus] = useState("idle");

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const onStartCounter = () => {
    if (time.minutes == 0 && time.seconds === 0) return;
    if (intervalRef.current) return;

    setStatus("running");

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        const { minutes, seconds } = prev;
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setStatus("idle");
          return { minutes: 0, seconds: 0 };
        }
        const newSeconds = seconds > 0 ? seconds - 1 : 59;
        const newMinutes = seconds === 0 ? minutes - 1 : minutes;
        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
  };

  const onReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime({ ...time, minutes: 0, seconds: 0 });
    setStatus("idle");
  };

  const onPause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus("paused");
  };
  const onResume = () => {
    if (time.minutes === 0 && time.seconds === 0) return;
    onStartCounter();
  };
  const onStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus("idle");
  };
  const onIncrementPress = () => {
    setTime((prev) => {
      let newSeconds = prev.seconds + 30;
      let newMinutes = prev.minutes;

      if (newSeconds >= 60) {
        newMinutes += Math.floor(newSeconds / 60);
        newSeconds %= 60;
      }

      return { ...prev, minutes: newMinutes, seconds: newSeconds };
    });
  };
  const onDecrementPress = () => {
    setTime((prev) => {
      let newSeconds = prev.seconds - 30;
      let newMinutes = prev.minutes;

      if (newSeconds < 0) {
        if (newMinutes > 0) {
          newMinutes -= 1;
          newSeconds += 60;
        } else {
          newMinutes = 0;
          newSeconds = 0;
        }
      }

      return { ...prev, minutes: newMinutes, seconds: newSeconds };
    });
  };

  const formatTime = (time) =>
    `${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(
      2,
      "0"
    )}`;

  return (
    <View style={styles.container}>
      <View style={styles.increment}>
        <View>
          <TouchableOpacity onPress={onDecrementPress}>
            <Button
              color="white"
              height={50}
              textColor="black"
              title="-30"
              width={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.timeDisplayer}>
          <Text style={styles.timeText}>{formatTime(time)}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={onIncrementPress}>
            <Button
              color="white"
              height={50}
              textColor="black"
              title="+30"
              width={50}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressBar}></View>

      <View style={styles.timeControlls}>
        {status === "idle" && (
          <TouchableOpacity onPress={onStartCounter}>
            <Button
              color="green"
              height={60}
              textColor="white"
              title="Start"
              width={90}
            />
          </TouchableOpacity>
        )}
        {status === "running" && (
          <TouchableOpacity onPress={onPause}>
            <Button
              color="green"
              height={60}
              textColor="white"
              title="Pause"
              width={90}
            />
          </TouchableOpacity>
        )}
        {status === "paused" && (
          <TouchableOpacity onPress={onResume}>
            <Button
              color="green"
              height={60}
              textColor="white"
              title="Resume"
              width={90}
            />
          </TouchableOpacity>
        )}
        {status === "running" ||
          (status === "paused" && (
            <TouchableOpacity onPress={onStop}>
              <Button
                color="red"
                height={60}
                textColor="white"
                title="Stop"
                width={90}
              />
            </TouchableOpacity>
          ))}

        <TouchableOpacity onPress={onReset}>
          <Button
            color="black"
            height={60}
            textColor="white"
            title="Reset"
            width={90}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeController;

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "#e2e2e2",
    width: "96%",
    marginTop: 10,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  timeDisplayer: {
    height: 160,
    width: 160,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  timeControlls: {
    height: 100,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 16,
  },
  timeText: {
    fontWeight: "900",
    fontSize: 40,
  },
  progressBar: {
    height: 5,
    width: "90%",
    backgroundColor: "blue",
    marginTop: 20,
    borderRadius: 100,
  },
  increment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
