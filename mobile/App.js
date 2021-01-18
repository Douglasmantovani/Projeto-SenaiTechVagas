import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import "react-native-gesture-handler";

import VizualizarVagaEmpresa from "./src/Pages/VizualizarVagaEmpresa/index";
import VizualizarCandidatosAprovados from "./src/Pages/VizualizarCandidatosAprovados";
import ListarVagasEmpresa from "./src/Pages/ListarVagasEmpresa";
import ListarVagasInscritas from "./src/Pages/ListarVagasInscritas";
import Splash from "./src/Pages/Splash";
import Login from "./src/Pages/Login";
import Principal from "./src/Pages/Principal";
import VagaCompleta from "./src/Pages/VagaCompleta";

export default function App() {
  const Tab = createBottomTabNavigator();

  function Mytabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === "Principal") {
              return (
                <Image
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/512/61/61088.png",
                  }}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              );
            } else if (route.name === "Inscricoes") {
              return (
                <Image
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/512/25/25694.png",
                  }}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Inscricoes"
          component={ListarVagasInscritas}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Principal" component={Principal} />
      </Tab.Navigator>
    );
  }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="ListarVagaEmpresa"
          component={ListarVagasEmpresa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="VagaEmpresa" component={VizualizarVagaEmpresa} />
        <Stack.Screen
          name="CandidatosAprovados"
          component={VizualizarCandidatosAprovados}
        />
        <Stack.Screen name="VagaCompleta" component={VagaCompleta} />
        <Stack.Screen
          name="ListarVagasInscritas"
          component={Mytabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
