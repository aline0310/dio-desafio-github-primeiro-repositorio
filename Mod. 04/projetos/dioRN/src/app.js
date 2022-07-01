import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text} from 'react-native';


const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E'
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/83099972?v=4'

const App = () => {
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor= {colorGithub} barStyle= "light-content"/>
        <View style = {style.content}>
            <Image accessibilityLabel = "Imagem do rosto de Aline sorrindo"   style = {style.avatar} source={{uri:imageProfileGitHub}}/>
            <Text accessibilityLabel = "Nome Aline Rodrigues" style={[style.defaultText, style.name]}> Aline Rodrigues</Text>
            <Text accessibilityLabel = "Nickname aline0310" style={[style.defaultText, style.nickname]}> aline0310</Text>
            <Text accessibilityLabel = "Descrição de perfil Aline Rodrigues: Back-End Developer | Estudante na {Reprograma}" style={[style.defaultText, style.description]}> Back-End Developer | Estudante na {Reprograma}</Text>
            <View>
                <Text>Open in Github</Text>
            </View>
        </View>
        </SafeAreaView>
    );
};
    
export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:"white",
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
   description: {
     fontWeight: 'bold',
     fontSize: 14,
   },
});

