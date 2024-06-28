import "react-native-gesture-handler";

import * as React from "react";
import { Text, View, Alert, ScrollView } from "react-native";
import styles from "./style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Divider, List } from "react-native-paper";
import AboutScreen from "./About";
import VideoScreen from "./Video";
import RegisterScreen from "./Register";
import Array from "./User";
import Sweet from "./Sweetalert";
import HomeScreen from "./Home";
import Awesome from "./Awesome";
import Mobile from "./Mobile";
import Menu from "./Menu";
import Chipper from "./Chipper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./Edit";
import HomePage from "./Homepage";
import { api as api } from "../app.json";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Edit = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "About") {
            iconName = "home";
          } else if (route.name === "Video") {
            iconName = "video";
          } else if (route.name === "Register") {
            iconName = "door";
          } else if (route.name === "Users") {
            iconName = "school";
          } else if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Sample") {
            iconName = "login";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: "Register",
          tabBarActiveTintColor: "red",
        }}
      />
      {/* <Tab.Screen
        name="Sample"
        component={Mobile}
        options={{
          tabBarLabel: "Sample",
          tabBarActiveTintColor: "red",
        }}
      /> */}
      <Tab.Screen
        name="Users"
        component={Array}
        options={{
          tabBarLabel: "Users",
          tabBarActiveTintColor: "red",
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About Us",
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarLabel: "Watch Video",
          tabBarActiveTintColor: "red",
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "red",
        }}
      />
    </Tab.Navigator>
  );
};
ScrollView;
ScrollView;

export default function App() {
  // global.notice = Sweet;
  global.notice = Awesome;
  global.api = api;
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Screen" component={Screen} />
        <Stack.Screen
          name="Signin"
          component={Mobile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Chipper"
          component={Chipper}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}
