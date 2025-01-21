import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { TimeContext } from "@/context";

const TimeController = () => {
  const { time, setTime } = useContext(TimeContext);
  const [isCounting, setIsCounting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isNeedCountDown, setIsNeedCountDown] = useState(false);





  const onStartCounter = () => {
    setIsCounting(true);
    setIsPaused(false);

    setInterval(() => {
      let prevTime = time.seconds;
      setTime({ ...time, seconds: prevTime - 1 });
    }, 1000);
  };

  const onResetPress = () => {
    setTime({ ...time, minutes: 0, seconds: 0 });
    setIsCounting(false);
  };

  const onPause = () => {
    setIsCounting(false);
    setIsPaused(true);
  };
  const onResume = () => {
    setIsCounting(true);
    setIsPaused(false);
  };
  const onStop = () => {
    setIsCounting(false);
  };
  const onIncrementPress = () => {
    const updatedSeconds = time.seconds >= 30 ? 0 : Number(time.seconds) + 30;
    setTime({ ...time, seconds: updatedSeconds });
  };
  const onDecrementPress = () => {
    const updatedSeconds = time.seconds >= 30 ? time.seconds - 30 : 0;
    setTime({ ...time, seconds: updatedSeconds });
  };
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
          <Text style={styles.timeText}>
            {time.minutes}:{time.seconds}
          </Text>
          <View></View>
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
        {!isCounting && !isPaused && (
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
        {isCounting && !isPaused && (
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
        {isPaused && (
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
        {isCounting && (
          <TouchableOpacity onPress={onStop}>
            <Button
              color="red"
              height={60}
              textColor="white"
              title="Stop"
              width={90}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={onResetPress}>
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
