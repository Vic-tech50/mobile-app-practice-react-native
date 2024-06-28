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
import Head from "./Head";

export default function HomePage() {
  return (
    <View style={styling.container}>
      <Head />

      <View style={styling.secondFlex}>
        <ScrollView>
          <Text style={[t.textBlack, t.mL4]}>Favourites</Text>
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
            <TouchableOpacity style={styling.box2}>
              <Icon source={"link"} size={30} color="green" />
              <Text style={styling.boxText}>Do More</Text>
            </TouchableOpacity>
          </View>

          <Text style={[t.textBlack, t.mL4, t.mT4, t.fontBold]}>Features</Text>
          <Text></Text>
          <View>
            <Card style={styling.card}>
              <Card.Cover
                source={require("../assets/images/fidelity.jpeg")}
                style={{ height: 300 }}
              />
            </Card>
            {/* <Image
              source={require("../assets/images/fidelity.jpeg")}
              borderRadius={10}
              style={{ height: 300 }}
            /> */}
          </View>
        </ScrollView>
      </View>

      {/* <View style={styling.thirdFlex}>
        <Text style={{ color: "white" }}>
          Fidelity Bank PLC 100022 (Licenced by the Central Bank Of Nigeria)
        </Text>
      </View> */}
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  firstFlex: {
    flex: 2,
    backgroundColor: "#0066ff",
    alignItems: "center",
    justifyContent: "center",
  },

  secondFlex: {
    flex: 3,
    paddingTop: 30,
  },

  thirdFlex: {
    flex: 2,
    justifyContent: "flex-end",
    paddingBottom: 30,
    alignItems: "center",
    backgroundColor: "red",
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
