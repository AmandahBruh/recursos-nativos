import { Text } from "react-native-paper";
import { FlatList, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { styles } from "./BatteryInfo";

export default function ContactInfo() {
  const [contacts, setContacts] = useState([]);

  useEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          carregarContatos();
        }
      })();
    }),
    []
  );

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });
    setContacts(data);
    console.log(data);
  }

  return (
    <View style={styles.container}>
      {contacts ? (
        <FlatList
          style={{ flex: 1, gap: 10 }}
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
      <Text>Tela de contato</Text>
    </View>
  );
}
