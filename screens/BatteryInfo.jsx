import { View, Text, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Battery from 'expo-battery';
import { useEffect, useState } from "react";


export default function BatteryInfo({navigation}) {
    const [nivelBateria, setNivelBateria] = useState();

    async function atualizarTudo() {
        Bateria()
    }

    async function Bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    useEffect(() => {
        Bateria();
    },[])

    return(
        <View>
            <Header title="Nível da bateria" />
            <Text style={styles.container}> { nivelBateria } % </Text>
            <Button style={styles.container} title="Atualizar" onPress={ atualizarTudo } />
            <Footer />
        </View>
    )
}