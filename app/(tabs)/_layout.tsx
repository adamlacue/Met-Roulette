import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: { backgroundColor: "#181a20", borderTopColor: "#222" },
      }}
    >
      <Tabs.Screen
        name="met"
        options={{
          title: "The Met",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="aic"
        options={{
          title: "AIC",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
