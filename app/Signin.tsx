import * as React from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import styles from "./style";

import { Button, Divider, List, TextInput, Checkbox } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Signin() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertTitle, setAlertTitle] = React.useState("");

  const [checked, setChecked] = React.useState(false);

  const showAlertDialog = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={styling.container}>
      <View style={styling.firstFlex}>
        <Image
          source={require("./img2.webp")}
          borderBottomLeftRadius={40}
          style={{ minHeight: 40 }}
        />
        <View>
          {/* <Text style={styling.txt}>Welcome to Fidelity Bank</Text> */}
        </View>
      </View>

      <View style={styling.secondFlex}>
        <View>
          <TextInput
            label="Username"
            mode="outlined"
            style={styling.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            label="Password"
            mode="outlined"
            style={styling.input}
            value={password}
            onChangeText={setPassword}
          />
          <Text></Text>
          <View style={styling.row}>
            <Checkbox.Item
              label="Show password"
              labelStyle={{ color: "white" }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="green"
              position="leading"
              //     style={styling.leftText}
            />
            <Text style={styling.rightText}>Forgot Password?</Text>
          </View>
          <Text></Text>

          <Button
            mode="contained"
            buttonColor="green"
            textColor="white"
            style={{ padding: 10 }}
          >
            LOGIN
          </Button>
        </View>

        <View>
          <Text></Text>
          <Text></Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            New to internet banking?
            <Text style={{ color: "green" }}> Sign Up Here</Text>
          </Text>
        </View>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={alertTitle}
          message={alertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={hideAlert}
        />
      </View>
      <View style={styling.thirdFlex}>
        <Text style={{ color: "white" }}>
          Fidelity Bank PLC 100022 (Licenced by the Central Bank Of Nigeria)
        </Text>
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000066",
  },
  firstFlex: {
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-end",
  },

  secondFlex: {
    flex: 2,
    padding: 30,
  },

  thirdFlex: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    alignItems: "center",
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
    alignItems: "center",
  },
  leftText: {
    flex: 1,
    color: "white",
    //     textAlign: "left",
  },
  rightText: {
    //     flex: 1,
    textAlign: "right",
    color: "white",
  },
});
