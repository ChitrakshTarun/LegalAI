import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import * as Haptics from "expo-haptics";

export default function ChatLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          headerTitle: "New Chat",
          headerRight: () => (
            <Pressable
              onPress={() => {
                Haptics.selectionAsync();
                router.back();
              }}
            >
              <Ionicons name="close-circle" color={"black"} size={24} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="response" />
    </Stack>
  );
}
