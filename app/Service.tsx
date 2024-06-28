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

export default function Services() {
  return (
    <View style={styling.container}>
      <Header name="Services" />
      <View style={styling.secondFlex}>
        <ScrollView>
          <Text></Text>
          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Icon source={"transfer"} size={30} color="green" />
              <Text style={styling.boxText}>Transfers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"phone"} size={30} color="green" />
              <Text style={styling.boxText}>Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"flash"} size={30} color="green" />
              <Text style={styling.boxText}>Utility & Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"bank"} size={30} color="green" />
              <Text style={styling.boxText}>Loans</Text>
            </TouchableOpacity>
          </View>
          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Icon source={"refresh"} size={30} color="green" />
              <Text style={styling.boxText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"chart-line"} size={30} color="green" />
              <Text style={styling.boxText}>Forex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"qrcode"} size={30} color="green" />
              <Text style={styling.boxText}>QRPay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"link"} size={30} color="green" />
              <Text style={styling.boxText}>Do More</Text>
            </TouchableOpacity>
          </View>
          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Icon source={"refresh"} size={30} color="green" />
              <Text style={styling.boxText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"chart-line"} size={30} color="green" />
              <Text style={styling.boxText}>Forex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"qrcode"} size={30} color="green" />
              <Text style={styling.boxText}>QRPay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"link"} size={30} color="green" />
              <Text style={styling.boxText}>Do More</Text>
            </TouchableOpacity>
          </View>

          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Icon source={"refresh"} size={30} color="green" />
              <Text style={styling.boxText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"chart-line"} size={30} color="green" />
              <Text style={styling.boxText}>Forex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"qrcode"} size={30} color="green" />
              <Text style={styling.boxText}>QRPay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"link"} size={30} color="green" />
              <Text style={styling.boxText}>Do More</Text>
            </TouchableOpacity>
          </View>

          <View style={styling.row}>
            <TouchableOpacity style={styling.box}>
              <Icon source={"refresh"} size={30} color="green" />
              <Text style={styling.boxText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styling.box}>
              <Icon source={"chart-line"} size={30} color="green" />
              <Text style={styling.boxText}>Forex</Text>
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
  card: {
    width: "100%",
    // height: 300,
    // marginVertical: 10,
  },

  box: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: "lavender",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
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
