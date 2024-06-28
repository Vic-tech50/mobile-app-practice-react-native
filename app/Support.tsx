import * as React from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { t } from "react-native-tailwindcss";
import { LinearGradient } from "expo-linear-gradient";

import {
  Button,
  Divider,
  List,
  TextInput,
  Checkbox,
  Surface,
  Icon,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";
import Header from "./Header";

export default function Support() {
  return (
    <View style={styling.container}>
      <Header name="Support" />
      <View style={styling.secondFlex}>
        <ScrollView>
          <Text></Text>
          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon
                    source={"comment-text-multiple"}
                    size={20}
                    color="black"
                  />{" "}
                  <Text></Text>
                  <Text> Complaints </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"account"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> Account Officer </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"facebook"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> @fidelityBank </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"instagram"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> @fidelityBank </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>

            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"twitter"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> @fidelityBank </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>

            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"phone-in-talk"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> 070034335489 </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>

            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Icon source={"email"} size={20} color="black" />{" "}
                  <Text></Text>
                  <Text> true.serve@fidelityBank.ng </Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>

            <TouchableOpacity style={styling.box}>
              <Surface style={styling.row2}>
                <Text style={styling.leftText}>
                  <Text></Text>
                  <Text> Privacy Policy</Text>
                </Text>

                <Text style={styling.rightText}>
                  <Icon source={"chevron-right"} size={20} color="black" />{" "}
                </Text>
              </Surface>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  firstFlex: {
    flex: 1,
    backgroundColor: "#0066ff",
    alignItems: "center",
    justifyContent: "center",
  },

  secondFlex: {
    flex: 6,
    paddingTop: 10,
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
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },

  row2: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  leftText: {
    //     flex: 1,
    color: "black",
    textAlign: "left",
    fontSize: 15,
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    color: "black",
  },

  centerText: {
    flex: 1,
    textAlign: "left",
    color: "black",
    marginLeft: 1,
  },
  card: {
    width: "100%",
    // height: 300,
    // marginVertical: 10,
  },

  box: {
    margin: 5,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
  },

  box2: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderBlockColor: "black",
    borderWidth: 1,
  },

  boxText: {
    color: "black",
    fontWeight: "bold",
  },
});
