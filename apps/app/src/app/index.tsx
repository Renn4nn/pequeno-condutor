import {View, StyleSheet, Image, Text} from 'react-native'
import Input from '@/components/Input'
import { Button } from '@/components/Button'

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/image1.png')} style={styles.image} />
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.subtitle}>Bem-vindo ao Pequeno Condutor</Text>
            </View>
            <View style={styles.form}>
                <Input placeholder="Email" />
                <Input placeholder="Senha" secureTextEntry />
                <Button label="Entrar" />
            </View>
            <Text style={styles.footer}>Não tem conta? <Text style={styles.footerLink}>Cadastre-se</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        padding: 24,
    },
    header: {
        marginBottom: 32,
        alignItems: 'center',
        width: '100%',
        maxWidth: 480,
    },
    form: {
        width: '100%',
        maxWidth: 480,
        gap: 16,
    },
    image: {
        width: 180, 
        height: 170,
        marginBottom: 16,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
        color: '#F070A1',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18, 
        color: '#6c757d',
        marginTop: 8,
        textAlign: 'center',
    },
    footer: {
        marginTop: 32,
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
    },
    footerLink: {
        color: '#F070A1',
        fontWeight: '600',
    },
})