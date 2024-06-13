import * as React from "react";
import { Text, View, Alert, ScrollView, ImageBackground } from "react-native";
import styles from "./style";

import { Button, Divider, List } from "react-native-paper";

export default function AboutScreen() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/tr.jpg")}
        style={styles.firstFlex}
      >
        <View>
          <Text style={styles.txt}>Learn About Us</Text>
        </View>
      </ImageBackground>

      <View style={styles.secondFlex}>
        <ScrollView>
          <List.Section title="">
            <List.Accordion
              title="History"
              rippleColor={"red"}
              left={(props) => <List.Icon {...props} icon="history" />}
            >
              <List.Item
                title="In 2009, Chinese pharmacologist Li Lianda "
                description="claimed that a key product made by Tasly was unsafe. Tasly sued Li in 2013, alleging that Li's claim was baseless and was motivated by his financial and employment relations with Guangzhou Pharmaceutical, a direct competitor of Tasly. In September 2014, the Tianjin High People's Court ruled in favour of Tasly and ordered Li to issue an apology and pay Tasly 300,000 yuan in compensation"
                descriptionNumberOfLines={10}
              />
            </List.Accordion>

            <List.Accordion
              title="Company Profile"
              left={(props) => <List.Icon {...props} icon="book" />}
            >
              <List.Item
                title="First item"
                description="claimed that a key product made by Tasly was unsafe. Tasly sued Li in 2013, alleging that Li's claim was baseless and was motivated by his financial and employment relations with Guangzhou Pharmaceutical, a direct competitor of Tasly. In September 2014, the Tianjin High People's Court ruled in favour of Tasly and ordered Li to issue an apology and pay Tasly 300,000 yuan in compensation"
                descriptionNumberOfLines={10}
              />
            </List.Accordion>

            <List.Accordion
              title="Company Profile"
              left={(props) => <List.Icon {...props} icon="book" />}
              expanded={expanded}
              onPress={handlePress}
            >
              <List.Item
                title="First item"
                description="claimed that a key product made by Tasly was unsafe. Tasly sued Li in 2013, alleging that Li's claim was baseless and was motivated by his financial and employment relations with Guangzhou Pharmaceutical, a direct competitor of Tasly. In September 2014, the Tianjin High People's Court ruled in favour of Tasly and ordered Li to issue an apology and pay Tasly 300,000 yuan in compensation"
                descriptionNumberOfLines={10}
              />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
}
