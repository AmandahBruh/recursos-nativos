import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      gap: 15,
      backgroundColor: "#fff",
    },
  
    title: {
      color: "#fff",
      backgroundColor: "#606",
      padding: 10,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  
    textBox: {
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  
    purpleText: {
      color: "#fff",
      backgroundColor: "#969",
      // textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      width: 230,
      height: 60,
      padding: 10,
    },
  
    boxBtn: {
      color: "#000",
      alignItems: "center",
      paddingVertical: 10,
      marginTop: 20,
    },
  
    textBtn: {
      backgroundColor: "#4C9BCC",
      paddingVertical: 5,
      paddingHorizontal: 90,
      color: "#fff",
    },
});

export default styles;