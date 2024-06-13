import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstFlex: {
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },

  secondFlex: {
    flex: 2,
  },

  txt: {
    fontSize: 50,
    color: "white",
  },
  input: {
    marginTop: 40,
    color: "black",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  playButton: {
    marginTop: 16,
    fontSize: 18,
    color: "blue",
  },
});

export default styles;
