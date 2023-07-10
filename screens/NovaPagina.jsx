import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Image, TouchableHighlight } from "react-native";
import * as Notifications from "expo-notifications";
import Header from "../components/Header";
import styles from "../utils/styles";
import {
    SafeAreaView,
    Animated,
    Easing,
  } from 'react-native';

export default function NovaPagina() {
    const [expoToken, setExpoToken] = useState("");
    let rotateValueHolder = new Animated.Value(0);
 

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };
    
    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    

    async function Notificar() {
        const token = await Notifications.scheduleNotificationAsync({
          content: {
            title: "HAHAHAHHAHAHAH",
            subtitle: "Você caiu no bait da Hatsune miku",
            body: "Você caiu no bait da Hatsune miku",
          },
          trigger: { seconds: 2 },
        });
        setExpoToken(token);
      }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
      <Header
                title="Hatsune Miku"
            />
        <Text>
          Hatsune Miku
        </Text>
        <View style={{alignItems: 'center'}}>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              transform: [{ rotate: RotateData }],
            }}
            source={require('../assets/sekaide.jpg')}
          />
        </View>
        

        <Button title={"Clique aqui e saia do app"} onPress={Notificar}/>
        <Button title={"Surpresa!"} onPress={startImageRotateFunction}/>
      </View>
    </SafeAreaView>
  );
};
 
