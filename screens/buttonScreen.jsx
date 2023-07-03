import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import styles from "../utils/styles";
import Header from "../components/Header";

export default function ButtonScreen({ navigation }){

    const [nomeDispositivo, setNomeDispositivo] = useState(); 
    const [memoria, setMemoria] = useState();
    const [versao, setVersao] = useState();
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

    function mostrar(){
        setNomeDispositivo(Device.osName);
        setMemoria(Device.totalMemory);
        setVersao(Device.osVersion);
    }
    function sumir(){
        setNomeDispositivo('');
        setMemoria('');
        setVersao('');
    }


    return(
        <View style={styles.container}>
             <Header style={styles.title} title="Button Screen" />
            
            <Button onPress={ mostrar } title="APARECER"
            >
                Atualizar
            </Button>
            <Text>Nome do dispositivo: {nomeDispositivo}</Text>
            <Text>Memória: {memoria}</Text>
            <Text>Versão: {versao}</Text>
            <Text style={{
                color: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red'
            }}>
             {nivelBateria}%
            </Text>

            <Button onPress={atualizarTudo} title="ATUALIZAR">
            </Button>

            <Button onPress={sumir} title="SUMIR"> 
            </Button>
        </View>
    )
}