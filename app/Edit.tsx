import * as React from "react";
import { Text, View, Alert, ScrollView, ImageBackground } from "react-native";
import styles from "./style";

import { Button, Divider, List, TextInput } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Screen({ route }) {
  const [name, setname] = React.useState(route.params?.name);
  const [email, setemail] = React.useState(route.params?.email);
  const [id, setid] = React.useState(route.params?.id);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertTitle, setAlertTitle] = React.useState("");

  const showAlertDialog = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  // const updateUser = async (name, email, id) => {
  //   const endpoint = `http://192.168.92.46:8000/api/users/${id}`;
  //   const putData = {
  //     name: name,
  //     email: email,
  //     id: id,
  //   };

  //   try {
  //     const response = await fetch(endpoint, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(putData),
  //     });

  //     if (response.ok) {
  //       Alert.alert("User updated successfully");
  //     } else {
  //       const errorData = await response.json();
  //       Alert.alert("Error", errorData.message || "Failed to update user");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred while updating user:", error);
  //     Alert.alert("Error", "An unexpected error occurred");
  //   }
  // };

  const Updatedata = async (name, email, id) => {
    const endpoint = "http://192.168.92.46:8000/api/users/${id}";
    const postData = {
      name: name,
      email: email,
      id: id,
      //       password: password, // Enclose phone number in quotes to keep it as string
    };
    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json", // Removed charset from Content-Type header
        },
      });
      if (response.ok) {
        Alert.alert("Done");
        setAlertTitle("Success");
        setAlertMessage("User Registered Successfully");
        showAlertDialog();
      } else {
        setAlertTitle("Error");
        setAlertMessage("Error, Try Again");
        showAlertDialog();
      }
    } catch (error) {
      Alert.alert("Error occurred while sending data:", "error");
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
          <Text style={styles.txt}>Edit</Text>
        </View>
      </ImageBackground>

      <View style={styles.secondFlex}>
        <ScrollView>
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={setname}
            style={styles.input}
          />

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setemail}
            style={styles.input}
          />

          <Text></Text>

          <Button
            mode="contained"
            buttonColor="red"
            textColor="white"
            onPress={() => {
              Updatedata(name, email, id);
            }}
          >
            Edit
          </Button>
        </ScrollView>
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
  );
}
