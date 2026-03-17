import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "@/lib/store/useAuthStore";

export default function Layout() {
  const { isLogged } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está tentando acessar a área logada sem estar logado
    const inAuthGroup = segments[0] === "(auth)";

    if (!isLogged && !inAuthGroup) {
      // Se não está logado e não está nas páginas de login/cadastro, manda para o login
      router.replace("/(auth)/login");
    } else if (isLogged && inAuthGroup) {
      // Se logou e ainda está no grupo de auth, manda para a home
      router.replace("/(app)");
    }
  }, [isLogged, segments]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
