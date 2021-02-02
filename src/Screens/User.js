import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, ImageBase } from 'react-native';




export default function Main(props) {
    // const [Name, setName] = useState("Hunaiza Solanki");
    // const [Email, setEmail] = useState("huniisolanki10@gmail.com");
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}><Text style={styles.headerT}>Blood Bank</Text></View>
            <View style={styles.Login}>
            <Text style={styles.paragraph}>Login</Text>
            {/* <Image style={styles.image} source={require('../img/Image.jpg')} /> */}
            <Image style={styles.image} source={{uri: "https://secure.webtoolhub.com/static/resources/icons/set44/7acf73fc.png"}}></Image>
            <TextInput keyboardType="email-address" style={styles.input} placeholder = "Username"></TextInput>
            <TextInput style={styles.input} secureTextEntry={true} placeholder = "Password"></TextInput>
            {/* <Button style={styles.btn} title="Login" color="grey" onPress={() => alert("Login")} /> */}
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={()=> props.navigation.navigate("UserLogin")}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.New}>New User? </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnB} onPress={()=> props.navigation.navigate("Register")}>
            <Text style={styles.btnR}>Register Now</Text>    
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 1,
    },
    Login: {
        marginTop: 10,
        flex: 12,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'grey',
        width: '100%',
        marginTop: -50,
    },
    headerT: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center'

    },
    paragraph: {
        padding: 10,
        color: 'grey',
        fontSize: 32,
    },
    image: {
        width: 500,
        height: 200,
        resizeMode: 'contain',
    },
    input: {
        marginTop: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        height: 40,
        width: 200,
        alignItems: 'center',
        textAlign: 'center',
    },
    btn: {
        width: 100,
        backgroundColor: 'red',
        height: 40,
        marginTop: 12,
        borderRadius: 20,
    },
    btnTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop: 2,
    },
    New: {
        fontSize: 20,
        marginTop: 22,
        color: 'grey'
    },
    btnB: {
        width: 150,
        backgroundColor: 'red',
        height: 40,
        marginTop: 12,
        borderRadius: 20,
        marginBottom: 170,
    },
    btnR: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 4,
        width: 150
    }
});