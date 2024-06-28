import "react-native-gesture-handler";

import * as React from "react";
import { Text, View, Alert, ScrollView } from "react-native";
import styles from "./style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Divider, List } from "react-native-paper";

import HomePage from "./Homepage";
import Services from "./Service";
import Support from "./Support";
import Track from "./Track";
import CarouselComponent from "./Carousel";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Homepage") {
            iconName = "home";
          } else if (route.name === "Account") {
            iconName = "bank";
          } else if (route.name === "Services") {
            iconName = "checkbox-blank-off";
          } else if (route.name === "Support") {
            iconName = "headphones";
          } else if (route.name === "Profile") {
            iconName = "account";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Homepage"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Carousel"
        component={CarouselComponent}
        options={{
          tabBarLabel: "Carousel",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: "Services",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: "Support",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Track}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "green",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;
