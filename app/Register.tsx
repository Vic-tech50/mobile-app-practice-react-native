import * as React from "react";
import { Text, View, Alert, ScrollView, ImageBackground } from "react-native";
import styles from "./style";

import { Button, Divider, List, TextInput } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function RegisterScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertTitle, setAlertTitle] = React.useState("");

  const showAlertDialog = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  const Insertdata = async (name, email, password) => {
    const endpoint = "http://192.168.188.46:8000/api/register";
    const postData = {
      name: name,
      email: email,
      password: password, // Enclose phone number in quotes to keep it as string
    };
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json", // Removed charset from Content-Type header
        },
      });
      if (response.ok) {
        setAlertTitle("Success");
        setAlertMessage("User Registered Successfully");
        showAlertDialog();
      } else {
        setAlertTitle("Error");
        setAlertMessage("Error, Try Again");
        showAlertDialog();
      }
    } catch (error) {
      console.error("Error occurred while sending data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/tr.jpg")}
        style={styles.firstFlex}
      >
        <View>
          <Text style={styles.txt}>Register Here</Text>
        </View>
      </ImageBackground>

      <View style={styles.secondFlex}>
        <ScrollView>
          <TextInput
            label="Name"
            mode="outlined"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            label="Password"
            mode="outlined"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Text></Text>

          <Button
            mode="contained"
            buttonColor="red"
            textColor="white"
            onPress={() => Insertdata(name, email, password)}
          >
            Register
          </Button>
        </ScrollView>

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
    </View>
  );
}
