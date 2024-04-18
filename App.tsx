
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}