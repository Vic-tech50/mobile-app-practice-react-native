import * as React from "react";
import { Text, View, Alert, ScrollView, ImageBackground } from "react-native";
import styles from "./style";

import { Button, Divider, List, TextInput } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Screen({ route }) {
  const [name, setname] = React.useState(route.params?.name);
  const [email, setemail] = React.useState(route.params?.email);
  const [id, setid] = React.useState(route.params?.id);
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
            onChange={setname}
            style={styles.input}
          />

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChange={setemail}
            style={styles.input}
          />

          <Text></Text>

          <Button mode="contained" buttonColor="red" textColor="white">
            Edit
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}
