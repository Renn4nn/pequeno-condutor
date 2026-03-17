import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export function Button({
  style,
  labelStyle,
  label,
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={[styles.label, labelStyle]}>{children || label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1a1a2e",
    padding: 10,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#F8F9FA",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
