import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "./style";
import { t } from "react-native-tailwindcss";

import { Button, Surface, Icon } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";
import { LinearGradient } from "expo-linear-gradient";
export default function Head() {
  return (
    <LinearGradient
      colors={["#0066ff", "#000066"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styling.firstFlex}
    >
      <Surface
        style={{
          height: 220,
          width: 400,
          backgroundColor: "#000066",
          borderRadius: 20,
        }}
        elevation={4}
      >
        <View style={{ padding: 20 }}>
          <View style={[styling.row]}>
            <Text style={styling.leftText}>
              Savings Account{" "}
              <Text>
                {"\n"}
                {"\n"}
              </Text>
              <Text style={[t.textGray600]}>6234994549</Text>
            </Text>
            <Text style={styling.rightText}>
              <Button
                mode="outlined"
                textColor="white"
                style={{ borderRadius: 10 }}
              >
                ACC 1 of 1
              </Button>
            </Text>
          </View>

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={[t.textWhite]}> $ ***********</Text>
          <Text></Text>
          <View style={[styling.row]}>
            <Text style={styling.leftText}>Savings Account </Text>
            <Text style={styling.rightText}>
              Show Balance <Icon source={"eye"} size={20} color="white" />
            </Text>
          </View>
        </View>
      </Surface>
    </LinearGradient>
  );
}

const styling = StyleSheet.create({
  firstFlex: {
    flex: 2,
    backgroundColor: "#0066ff",
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    fontSize: 25,
    color: "white",
  },
  input: {
    marginTop: 40,
    color: "black",
    backgroundColor: "#000066",
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
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    color: "white",
  },
});
