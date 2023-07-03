import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfoScreen from "./Deviceinfo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ButtonScreen from "./buttonScreen";
import ScreenOrientationScreen from "./ScreenOrientation";
import NotifyScreen from "./NotifyScreen";
import ContactInfo from "./contactInfo";
import AgendamentoNotifi from "./AgendamentoNotifi";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AgendamentoNotifi" component={AgendamentoNotifi} />
        <Stack.Screen name="ScreenOrientationScreen" component={ScreenOrientationScreen} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfoScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}