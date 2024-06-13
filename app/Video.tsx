import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

const VideoScreen = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>React Native YouTube Video</Text>
      <YoutubeIframe
        height={width * 0.5625} // Maintain a 16:9 aspect ratio
        width={width}
        videoId="jhp21djYitE" // The video ID from the provided URL
        play={playing}
        onChangeState={onStateChange}
      />
      <Text onPress={togglePlaying} style={styles.playButton}>
        {playing ? "Pause" : "Play"}
      </Text> */}

      <WebView
        style={styles.webview}
        source={{
          uri: "https://youtu.be/jhp21djYitE?si=djFk5Yp3FTAgp6Tp",
        }}
        allowsFullscreenVideo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  playButton: {
    marginTop: 16,
    fontSize: 18,
    color: "green",
  },
  webview: {
    width: width,
    height: 45, // Maintain a 16:9 aspect ratio
  },
});

export default VideoScreen;
