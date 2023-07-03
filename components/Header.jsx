import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import * as Battery from 'expo-battery';

export default function Header({ title }) {
    const [nivelBateria, setNivelBateria] = useState();

    async function atualizarTudo() {
        Bateria()
    }

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(Math.round(nivel * 100));
    }

    useEffect(() => {
        Bateria();
    },[])

    return (
        <View style={{
            backgroundColor: nivelBateria <= 100 && nivelBateria >= 60 ? 'green' : nivelBateria <= 59 && nivelBateria >= 30 ? '#D6A400' : nivelBateria <= 29 && nivelBateria >= 5 ? 'orange' : '#B8010E', paddingTop: 30, paddingBottom: 5,
            paddingHorizontal: 5,
        }}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Pressable onPress={atualizarTudo} style={{ backgroundColor: nivelBateria <= 100 && nivelBateria >= 60 ? '#44E100' : nivelBateria <= 59 && nivelBateria >= 30 ? '#E6E645' : nivelBateria <= 29 && nivelBateria >= 5 ? '#B87100' : '#F50213', padding: 12, borderRadius: 2, borderColor: "black"}}><Text style={{ fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',}}> Atualizar </Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: "#606",
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
});