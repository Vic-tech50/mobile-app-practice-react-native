import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CountryFlag from "react-native-country-flag";
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

const Chipper = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstFlex}>
        <Text style={styles.txt}>Your Balances</Text>
        <Text></Text>
        <Text style={{ marginRight: 20, borderRadius: 5 }}>
          <CountryFlag isoCode="ng" size={30} style={{}} />
          NGN
        </Text>
      </View>

      <View style={styles.secondFlex}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
        >
          <TouchableOpacity
            style={styles.txt2}
            onPress={() => Alert.alert("welcome")}
          >
            <Text>
              <Icon source={"phone"} size={30} color="black" /> {"\n"} Airtime
            </Text>
          </TouchableOpacity>

          <Text style={styles.txt2}>
            <Icon source={"wifi"} size={30} color="black" /> {"\n"} Data
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>

          <Text style={styles.txt2}>
            <Icon source={"transfer"} size={30} color="blue" /> {"\n"} Airtime
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  firstFlex: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    padding: 20,
  },

  secondFlex: {
    flex: 4,
    marginTop: 20,
  },
  txt: {
    textAlignVertical: "center",
  },
  txt2: {
    marginRight: 40,
  },
});

export default Chipper;
