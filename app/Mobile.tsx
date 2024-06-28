import "react-native-gesture-handler";

import * as React from "react";
import { Text, View, Alert, ScrollView } from "react-native";
import styles from "./style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Divider, List } from "react-native-paper";
import Signin from "./Signin";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const Mobile = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Login") {
            iconName = "login";
          } else if (route.name === "Register") {
            iconName = "lock";
          } else if (route.name === "Contact") {
            iconName = "headphones";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Login"
        component={Signin}
        options={{
          tabBarLabel: "Login",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Register"
        component={Signin}
        options={{
          tabBarLabel: "Open Account",
          tabBarActiveTintColor: "green",
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Signin}
        options={{
          tabBarLabel: "Contact",
          tabBarActiveTintColor: "green",
        }}
      />
    </Tab.Navigator>
  );
};

export default Mobile;
