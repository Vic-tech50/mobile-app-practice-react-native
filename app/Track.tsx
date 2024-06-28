import * as React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
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

export default function Track() {
  const [trackingCode, setTrackingCode] = React.useState("");
  const [trackingInfo, setTrackingInfo] = React.useState(null);
  const [error, setError] = React.useState(null);

  const trackPackage = async () => {
    try {
      const response = await fetch("http://192.168.197.46:8000/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tracking_code: trackingCode }),
      });

      const data = await response.json();

      if (response.ok) {
        setTrackingInfo(data.data);
        setError(null);
      } else {
        setTrackingInfo(null);
        setError(data.message);
      }
    } catch (error) {
      setTrackingInfo(null);
      setError("An error occurred");
    }
  };

  return (
    <View style={styling.container}>
      <Header name="Track Your Goods" />
      <View style={styling.secondFlex}>
        <TextInput
          label="Track Code"
          mode="outlined"
          style={styling.input}
          value={trackingCode}
          onChangeText={setTrackingCode}
          textColor="black"
        />
        <Text></Text>
        <Button
          mode="contained"
          buttonColor="#d98c0f"
          textColor="white"
          style={{ padding: 10 }}
          onPress={trackPackage}
        >
          Track
        </Button>

        {trackingInfo && (
          <ScrollView style={[t.mT20]}>
            <Text style={[t.textCenter, t.text2xl]}>Sender Details:</Text>
            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Sender Name</Text>
              <Text style={styling.rightText}>{trackingInfo.sender_name}</Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Sender Phone</Text>
              <Text style={styling.rightText}>{trackingInfo.sender_phone}</Text>
            </Surface>

            <Text style={[t.textCenter, t.text2xl]}>Reciever Details:</Text>
            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Reciever Name</Text>
              <Text style={styling.rightText}>
                {trackingInfo.reciever_name}
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Reciever Phone</Text>
              <Text style={styling.rightText}>
                {trackingInfo.reciever_phone}
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Reciever Email</Text>
              <Text style={styling.rightText}>
                {trackingInfo.reciever_email}
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Reciever Address</Text>
              <Text style={styling.rightText}>
                {trackingInfo.reciever_address}, {trackingInfo.country}
              </Text>
            </Surface>

            <Text style={[t.textCenter, t.text2xl]}>Package Details:</Text>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Package Type</Text>
              <Text style={styling.rightText}>{trackingInfo.package_type}</Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Package Weight</Text>
              <Text style={styling.rightText}>
                {trackingInfo.package_weight}KG
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Shipment Method</Text>
              <Text style={styling.rightText}>
                {trackingInfo.shipment_method}
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Status</Text>

              <Text style={styling.rightText}>
                {trackingInfo.status == "Processed" ? (
                  <Text style={[t.textGreen700]}>Processed</Text>
                ) : (
                  trackingInfo.status
                )}
              </Text>
            </Surface>

            <Text style={[t.textCenter, t.text2xl]}>Others Details:</Text>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Current Location</Text>
              <Text style={styling.rightText}>
                {trackingInfo.current_location}
              </Text>
            </Surface>

            <Surface style={styling.row2} elevation={5}>
              <Text style={styling.leftText}>Comment</Text>

              <Text style={styling.rightText}>
                {trackingInfo.comment == null ? (
                  <Text style={[t.textBlue700]}>No Comment Yet</Text>
                ) : (
                  trackingInfo.comment
                )}
              </Text>
            </Surface>
          </ScrollView>
        )}

        {error && <Text style={styling.error}>{error}</Text>}
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  secondFlex: {
    flex: 6,
    paddingTop: 10,
  },
  result: {
    marginTop: 20,
  },
  error: {
    color: "red",
    marginTop: 20,
  },

  txt: {
    fontSize: 25,
    color: "white",
  },
  input: {
    marginTop: 40,
    color: "black",
    backgroundColor: "white",
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

    padding: 20,
    margin: 10,
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
