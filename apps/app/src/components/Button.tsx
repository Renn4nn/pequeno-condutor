import { TouchableOpacity, StyleSheet, TouchableOpacityProps, Text } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    label?: string;
    data?: any;
}

export function Button({ label, ...props }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1a1a2e',
        padding: 10,
        paddingVertical: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: '#F8F9FA',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
