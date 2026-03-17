import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "@/ui/components/Input";
import { Button } from "@/ui/components/Button";

export default function Cadastro() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>Junte-se à nossa aventura!</Text>
        </View>

        <View style={styles.form}>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirmar Senha" secureTextEntry />

          <Button label="Cadastrar" style={styles.buttonSpacing} />
        </View>

        <Text style={styles.footer}>
          Já possui uma conta?{" "}
          <Button
            style={styles.footerLink}
            labelStyle={styles.footerLinkText}
            onPress={() => console.log("Ir para Login")}
          >
            Entrar
          </Button>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 24,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
    width: "100%",
    maxWidth: 480,
  },
  form: {
    width: "100%",
    maxWidth: 480,
    gap: 12,
  },
  image: {
    width: 140,
    height: 130,
    marginBottom: 12,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#F070A1",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 4,
    textAlign: "center",
  },
  buttonSpacing: {
    marginTop: 8,
  },
  footer: {
    marginTop: 24,
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
  },
  footerLink: {
    backgroundColor: "transparent",
    width: "auto",
    paddingVertical: 0,
    // Opcional: alinhar na linha do texto
    alignSelf: "center",
  },
  footerLinkText: {
    color: "#F070A1",
    fontWeight: "bold",
    fontSize: 16,
  },
});
