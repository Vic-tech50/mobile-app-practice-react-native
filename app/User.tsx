import * as React from "react";
import { FlatList, StyleSheet, View, Alert, ScrollView } from "react-native";
// import styles from "./style";
import {
  Divider,
  Text,
  DataTable,
  FAB,
  Button,
  PaperProvider,
  Icon,
  MD3Colors,
  Surface,
} from "react-native-paper";

import AwesomeAlert from "react-native-awesome-alerts";

const Array = ({ navigation }) => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertTitle, setAlertTitle] = React.useState("");

  const showAlertDialog = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api + "users"); //get api from laravel
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        } //give an error message
        const data = await response.json();
        setUsers(data); //store the data
        //         setAlertTitle("Success");
        //         setAlertMessage("Data Fetched");
        //         showAlertDialog();
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(api + `users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      //       Alert.alert("Success", result.message);
      if (result.message === "user deleted successfully") {
        // Remove the deleted user from the local state
        setUsers(users.filter((user) => user.id !== id));
        setAlertTitle("Success");
        setAlertMessage("User Deleted Successfully");
        showAlertDialog();
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View>
      <Surface elevation={5} style={styles.surface}>
        <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
          Data From Database
        </Text>
      </Surface>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text
              style={{
                color: "red",
                padding: 10,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              Name
            </Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text
              style={{
                color: "red",
                padding: 10,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              Email
            </Text>
          </DataTable.Title>

          <DataTable.Title>
            <Text
              style={{
                color: "red",
                padding: 10,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              Action
            </Text>
          </DataTable.Title>
        </DataTable.Header>

        {error ? (
          <Text style={{ color: "black" }}>Error: {error}</Text>
        ) : (
          users.map((user) => (
            <View key={user.id}>
              <DataTable.Row>
                <DataTable.Cell>
                  <Text style={{ color: "black" }}>{user.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ color: "black" }}>{user.email} </Text>
                </DataTable.Cell>

                <DataTable.Cell>
                  <>
                    <Button
                      mode="contained"
                      buttonColor="red"
                      textColor="white"
                      onPress={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>

                    <Button
                      mode="contained"
                      buttonColor="green"
                      textColor="white"
                      onPress={() =>
                        navigation.navigate("Screen", {
                          name: user.name,
                          email: user.email,
                          id: user.id,
                        })
                      }
                    >
                      Edit
                    </Button>
                  </>
                </DataTable.Cell>
              </DataTable.Row>
            </View>
          ))
        )}
      </DataTable>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Success"
        message="User Deleted Successfully"
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
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: "black",
  },

  surface: {
    padding: 8,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  },
});

export default Array;
