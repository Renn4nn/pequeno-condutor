import {Text, View, StyleSheet, Image} from 'react-native'
import Input from '../components/Input'

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/image1.png')} style={styles.image} />
            </View>
            <View style={styles.form}>
                <Input placeholder="Email" />
                <Input placeholder="Senha" secureTextEntry />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
    },
    header: {
        marginBottom: 20,
    },
    form: {
        width: '100%',
        maxWidth: 400,
        gap: 12,
    },
    image: {
        width: 150,
        height: 150,
    }
})