import { View, Text, Button, ScrollView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function AgendamentoNotifi({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");


  async function Notificar() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        subtitle: description,
        body: description,
      },
      trigger: { seconds: 10 },
    });
    setExpoToken(token);
  }

  return (
    <ScrollView style={styles.container}>
        <Header style={styles.title} title="Agendamento de Notificações" />

        <Text> Escreva uma notificação para você receber em 10 segundos </Text>
        <TextInput label="Titulo" value={title} onChangeText={SetTitle}></TextInput>
        <TextInput label="Descrição" value={description} onChangeText={SetDescription}></TextInput>
        <Button style={styles.boxBtn}
         title="Enviar Notificação" onPress={Notificar}>
        </Button>

    </ScrollView>
  );
}
