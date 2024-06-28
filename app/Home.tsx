import * as React from "react";
import {
  Text,
  View,
  Alert,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
// import styles from "./style";

import {
  Button,
  Divider,
  List,
  TextInput,
  Icon,
  Surface,
} from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            <Text>{"\n"}</Text>
            <Text>
              {" "}
              TOTAL BALANCE <Icon source="eye" color="black" size={20} />{" "}
            </Text>
            <Text>{"\n"}</Text>
            <Text>$100.00</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text> AVAILABLE BALANCE: $10 </Text>

            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
          </Text>
          <View style={styles.first}>
            <View style={styles.buttonContainer}>
              <Button
                icon={"arrow-all"}
                mode="contained"
                buttonColor="red"
                textColor="white"
                onPress={() => alert("Button 1 pressed")}
              >
                Transfer
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                icon={"plus"}
                mode="contained"
                buttonColor="red"
                textColor="white"
                onPress={() => alert("Button 2 pressed")}
              >
                Buy
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                icon={"refresh"}
                mode="contained"
                buttonColor="red"
                textColor="white"
                onPress={() => alert("Button 3 pressed")}
              >
                {" "}
                Trade{" "}
              </Button>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "white" }}>
          {/* <Text>{"\n"}</Text> */}

          <View style={styles.first}>
            <Surface style={styles.box} elevation={5}>
              <Icon source={"vote"} size={30} color="white" />
              <Text>{"\n"}</Text>

              <Text style={styles.boxText}>Vote</Text>
            </Surface>
            <Surface style={styles.box} elevation={5}>
              <Icon source={"finance"} size={30} color="white" />
              <Text>{"\n"}</Text>

              <Text style={styles.boxText}>Grow</Text>
            </Surface>
            <Surface style={styles.box} elevation={5}>
              <Icon source={"book-education"} size={30} color="white" />
              <Text>{"\n"}</Text>

              <Text style={styles.boxText}>Learn</Text>
            </Surface>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
          <Surface elevation={5} style={styles.bigBox}>
            <Icon source={"book-education"} size={30} color="white" />
            <Text></Text>
            <Text style={[styles.boxText, { fontSize: 30 }]}>Get More</Text>
            <Text></Text>
            <Text style={styles.boxText}>
              You have a chance to win extra {"\n"} $SWEAT or other rewards
            </Text>
            <Text></Text>
            <Button
              compact={true}
              mode="contained"
              buttonColor="red"
              textColor="white"
              style={{ width: 200 }}
              onPress={() => navigation.navigate("Signin")}
            >
              Spin and Win
            </Button>
          </Surface>

          <ImageBackground
            source={require("../assets/images/tr.jpg")}
            style={styles.bigBox2}
          >
            <View>
              <Icon source={"book-education"} size={30} color="white" />
              <Text></Text>
              <Text style={[styles.boxText, { fontSize: 30 }]}>
                Estimate the value {"\n"} of an active day
              </Text>

              <Text style={styles.boxText}>and win 100k $SWEAT</Text>
              <Text></Text>
              <Button
                compact={true}
                mode="contained"
                buttonColor="red"
                textColor="white"
                style={{ width: 200 }}
                onPress={() => navigation.navigate("Menu")}
              >
                Share Your Opinion
              </Button>
            </View>
          </ImageBackground>

          <Surface elevation={5} style={styles.bigBox}>
            <Icon source={"book-education"} size={30} color="white" />
            <Text></Text>
            <Text style={[styles.boxText, { fontSize: 30 }]}>Get More</Text>
            <Text></Text>
            <Text style={styles.boxText}>
              You have a chance to win extra {"\n"} $SWEAT or other rewards
            </Text>
            <Text></Text>
            <Button
              compact={true}
              mode="contained"
              buttonColor="red"
              textColor="white"
              style={{ width: 200 }}
              onPress={() => navigation.navigate("Chipper")}
            >
              Spin and Win
            </Button>
          </Surface>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  box: {
    flex: 1,
    marginHorizontal: 5,
    height: 100, // Height of the box
    backgroundColor: "black", // Background color of the box
    justifyContent: "flex-start", // Centering text vertically
    padding: 10,

    //     alignItems: "center", // Centering text horizontally
    borderRadius: 10, // Optional: to make the box corners rounded
  },
  boxText: {
    color: "white", // Text color
  },
  bigBox: {
    height: 220,
    backgroundColor: "black",
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },

  bigBox2: {
    height: 220,

    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
});
