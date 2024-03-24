import { Stack, Tabs } from "expo-router";
import { House } from "phosphor-react-native";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#1B2316",
                    height: 64,
                    alignItems: "center",
                    borderTopWidth: 1,
                    borderTopColor: "#55B000",
                },
                headerShown: false,
                tabBarActiveTintColor: "#55B000",
                tabBarInactiveTintColor: "#67686d",
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <House color={color} size={30} weight="light" />
                    ),
                }}
            />
        </Tabs>
    );
}
