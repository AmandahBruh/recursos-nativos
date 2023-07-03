import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as ScreenOrientation from "expo-screen-orientation";
import styles from "../utils/styles";

export default function ScreenOrientationScreen() {
  const [cor, setCor] = useState("#000000");
  const [infoUwU, setInfoUwU] = useState("");

  useEffect(() => {
    // Get the initial orientation when the component mounts
    informar();
  }, []);

  async function Default() {
    await ScreenOrientation.unlockAsync();
    setCor("#ffffff");
  }

  async function DeitarDireita() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setCor("#A02CA0");
  }

  async function DeitarEsquerda() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    setCor("#DD42A7");
  }

  async function ForcarNormal() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
    setCor("#D6A400");
  }

  async function ForcarInverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
    setCor("#A942DD");
  }

  async function informar() {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setInfoUwU(orientation);
  }

  return (
    <View style={[styles.container, { backgroundColor: cor }]}>
      <Header style={styles.title} title="Orientação de Tela" />

      <Button style={styles.textBtn} title="Padrão" onPress={Default} />
      <Button
        style={styles.textBtn}
        title="Forçar Deitar Direita"
        onPress={DeitarDireita}
      />
      <Button
        style={styles.textBtn}
        title="Forçar Deitar Esquerda"
        onPress={DeitarEsquerda}
      />
      <Button
        style={styles.textBtn}
        title="Forçar Normal"
        onPress={ForcarNormal}
      />
      <Button
        style={styles.textBtn}
        title="Forçar Inverter"
        onPress={ForcarInverter}
      />

      <Button style={styles.textBtn} title="Informar" onPress={informar} />
    </View>
  );
}
