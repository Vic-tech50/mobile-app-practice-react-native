import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "./style";
import { t } from "react-native-tailwindcss";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Header(props) {
  return (
    <LinearGradient
      colors={["#0066ff", "#000066"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styling.firstFlex}
    >
      <View style={styling.row}>
        <Text style={styling.leftText}>
          {" "}
          <Icon source={"chevron-left"} size={30}></Icon>
        </Text>
        <Text style={styling.centerText}>{props.name}</Text>
        <Text style={styling.rightText}>
          <Icon source={"bell"} size={30}></Icon>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styling = StyleSheet.create({
  firstFlex: {
    flex: 1,
    backgroundColor: "#0066ff",
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  leftText: {
    flex: 1,
    color: "white",
    textAlign: "left",
    marginLeft: 20,
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    color: "white",
    marginRight: 20,
  },

  centerText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
