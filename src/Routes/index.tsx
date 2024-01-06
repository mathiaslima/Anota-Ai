import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Pages/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Styles/theme";
import { Alert, Share, TouchableOpacity } from "react-native";
import { useList } from "../Stores/UseList";

const Stack = createNativeStackNavigator();

function Routes() {
  const { clean, items } = useList();

  const onShare = async () => {
    try {
      const title = "Lista de Compras\n";

      let message = title;
      items.forEach((item) => {
        if (!item.checked) {
          message += "\n[   ] - " + item.text;
        }
      });

      await Share.share({
        message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.grayLightest,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <TouchableOpacity onPress={onShare}>
              <Entypo name="share" size={24} color={colors.grayLightest} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Você tem certeza?",
                  "Ao confirmar, todos os itens serão apagados!",
                  [
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () => clean(),
                      style: "default",
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <Entypo name="trash" size={24} color={colors.grayLightest} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name="Lista de Compras" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
