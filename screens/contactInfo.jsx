import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Notifications from 'expo-notifications'
import * as Contacts from 'expo-contacts'
import { useCallback, useEffect, useState } from "react";
import Items from "../components/Items";
import { useFocusEffect } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 10,
    },
    busca: {
        backgroundColor: "#DDD",
        padding: 10,
        height: 50,
        borderRadius: 10,
        fontSize: 20
    }
});
    
export default function ContactsInfo({ navigation }) {
    const [ contacts, setContacts ] = useState();

    async function carregarContatos(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ]
        })

        setContacts(data)
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const { status } = await Contacts
                    .requestPermissionsAsync();
                if (status === 'granted') {
                    await carregarContatos();
                } 
            })();
        }, [])
    );

    return(
        <View style={styles.container}>
            <Header
                title="Contatos"
            />
            <View style = {styles.content}>
                {
                    contacts
                        ? <FlatList
                            style={{ flex: 1, gap: 10 }}
                            data={ contacts }
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Items 
                                    item={item}
                                />
                            )}
                        />
                        : <Text>Não foi possivel encontrar os contatos</Text>
                }

            </View>
        </View>
    )
}